import { createFileRoute } from "@tanstack/react-router";

import { auth } from "~/lib/auth";

function handler({ request }: { request: Request }) {
  return auth.handler(request);
}

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: handler,
      POST: handler,
    },
  },
});
