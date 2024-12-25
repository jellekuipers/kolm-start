import { createAPIFileRoute } from "@tanstack/start/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "~/trpc/router";

function handler({ request }: { request: Request }) {
  return fetchRequestHandler({
    req: request,
    router: appRouter,
    endpoint: "/api/trpc",
  });
}

export const APIRoute = createAPIFileRoute("/api/trpc")({
  GET: handler,
  POST: handler,
});
