// https://tanstack.com/router/latest/docs/framework/react/start/getting-started#the-root-of-your-application

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import {
  createTRPCClient,
  loggerLink,
  unstable_httpBatchStreamLink,
} from "@trpc/client";
import { createTRPCOptionsProxy } from "@trpc/tanstack-react-query";
import superjson from "superjson";

import { DefaultCatchBoundary } from "~/components/default-catch-boundary";
import { NotFound } from "~/components/not-found";
import { AppRouter } from "~/trpc/router";
import { getUrl } from "~/utils/get-url";

import { routeTree } from "./routeTree.gen";

const getRequestHeaders = createServerFn({ method: "GET" }).handler(
  async () => {
    const request = getWebRequest()!;
    const headers = new Headers(request.headers);

    return Object.fromEntries(headers);
  },
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30 * 1000 },
    dehydrate: { serializeData: superjson.serialize },
    hydrate: { deserializeData: superjson.deserialize },
  },
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: createTRPCClient({
    links: [
      loggerLink({
        enabled: (op) =>
          process.env.NODE_ENV === "development" ||
          (op.direction === "down" && op.result instanceof Error),
      }),
      unstable_httpBatchStreamLink({
        transformer: superjson,
        url: getUrl(),
        async headers() {
          return await getRequestHeaders();
        },
      }),
    ],
  }),
  queryClient: new QueryClient(),
});

export function createRouter() {
  const router = createTanStackRouter({
    context: { queryClient, trpc },
    routeTree,
    defaultPreload: undefined,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
    Wrap: (props) => {
      return (
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      );
    },
  });

  return routerWithQueryClient(router, queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
