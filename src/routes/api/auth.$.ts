import { createServerFileRoute } from "@tanstack/react-start/server";

import { auth } from "~/lib/auth";

function handler({ request }: { request: Request }) {
  return auth.handler(request);
}

export const ServerRoute = createServerFileRoute("/api/auth/$").methods({
  GET: handler,
  POST: handler,
});
