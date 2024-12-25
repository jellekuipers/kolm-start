import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { useTRPC } from "~/trpc/react";

export const Route = createFileRoute("/profile")({
  loader: async ({ context: { trpc } }) => await trpc.user.me.prefetch(),
  component: RouteComponent,
});

function RouteComponent() {
  const trpc = useTRPC();
  const { data: user } = useSuspenseQuery(trpc.user.me.queryOptions());

  return <h2 className="font-bold">Welcome, {user}</h2>;
}
