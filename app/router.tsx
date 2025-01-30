// https://tanstack.com/router/latest/docs/framework/react/start/getting-started#the-root-of-your-application

import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { createServerFn } from "@tanstack/start";
import { getWebRequest } from "@tanstack/start/server";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";

import { DefaultCatchBoundary } from "~/components/default-catch-boundary";
import { NotFound } from "~/components/not-found";
import { trpc } from "~/trpc/react";
import { getUrl } from "~/utils/get-url";

import { routeTree } from "./routeTree.gen";

const getRequestHeaders = createServerFn({ method: "GET" }).handler(
  async () => {
    const request = getWebRequest()!;
    const headers = new Headers(request.headers);

    return Object.fromEntries(headers);
  },
);

export function createRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: { serializeData: superjson.serialize },
      hydrate: { deserializeData: superjson.deserialize },
    },
  });

  const trpcClient = trpc.createClient({
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
  });

  const serverHelpers = createServerSideHelpers({
    client: trpcClient,
    queryClient,
  });

  const router = createTanStackRouter({
    context: { queryClient, trpc: serverHelpers },
    routeTree,
    defaultPreload: undefined,
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    Wrap: (props) => {
      return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          {props.children}
        </trpc.Provider>
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
