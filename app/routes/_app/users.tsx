import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Spinner } from "~/components/spinner";
import { useTRPC } from "~/trpc/react";

export const Route = createFileRoute("/_app/users")({
  loader: async ({ context: { trpc } }) => await trpc.user.getAll.prefetch(),
  component: RouteComponent,
});

function RouteComponent() {
  const trpc = useTRPC();
  const { data, isLoading } = useSuspenseQuery(trpc.user.getAll.queryOptions());

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : data ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
