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
    <article>
      <h1 className="font-black text-2xl">Users</h1>
      <section>
        {isLoading ? (
          <Spinner />
        ) : data ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, email, image, name }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    {image ? <img src={image} alt={email} /> : null}
                    {email}
                  </td>
                  <td>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </section>
    </article>
  );
}
