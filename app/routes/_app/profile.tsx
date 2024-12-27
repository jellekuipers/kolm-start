import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Spinner } from "~/components/spinner";
import { useTRPC } from "~/trpc/react";

export const Route = createFileRoute("/_app/profile")({
  loader: async ({ context: { trpc } }) => await trpc.user.me.prefetch(),
  component: RouteComponent,
});

function RouteComponent() {
  const trpc = useTRPC();
  const { data, isLoading } = useSuspenseQuery(trpc.user.me.queryOptions());

  if (isLoading) return <Spinner />;

  return <h2 className="font-bold">Welcome, {data?.email}</h2>;
}
