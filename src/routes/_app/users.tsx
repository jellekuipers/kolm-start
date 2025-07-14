import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { useTRPC } from "~/trpc/react";

export const Route = createFileRoute("/_app/users")({
  loader: async ({ context }) =>
    await context.queryClient.ensureQueryData(
      context.trpc.user.getAll.queryOptions(),
    ),
  component: RouteComponent,
});

function RouteComponent() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.user.getAll.queryOptions());

  return (
    <article className="space-y-4">
      <h1 className="font-extrabold text-2xl">Users</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th className="text-left">Email</th>
              <th className="text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, email, image, name }) => (
              <tr key={id}>
                <td>
                  {image ? <img src={image} alt={email} /> : null}
                  {email}
                </td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
}
