import { createAPIFileRoute } from "@tanstack/react-start/api";

import { auth } from "~/lib/auth";

function handler({ request }: { request: Request }) {
  return auth.handler(request);
}

export const APIRoute = createAPIFileRoute("/api/auth/$")({
  GET: handler,
  POST: handler,
});
