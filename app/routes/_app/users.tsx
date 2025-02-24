import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { Spinner } from "~/components/spinner";
import { trpc } from "~/router";

export const Route = createFileRoute("/_app/users")({
  loader: async ({ context: { queryClient, trpc } }) =>
    await queryClient.ensureQueryData(trpc.user.getAll.queryOptions()),
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading } = useQuery(trpc.user.getAll.queryOptions());

  return (
    <article className="space-y-4">
      <h1 className="font-extrabold text-2xl">Users</h1>
      <section>
        {isLoading ? (
          <Spinner />
        ) : data ? (
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
        ) : null}
      </section>
    </article>
  );
}
