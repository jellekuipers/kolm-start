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
      <section className="-mx-4 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 align-middle whitespace-nowrap">
                Email
              </th>
              <th className="text-left px-4 py-2 align-middle whitespace-nowrap">
                Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300 border-y border-slate-300 align-middle">
            {data.map(({ id, email, image, name }) => (
              <tr key={id} className="align-middle">
                <td className="px-4 py-2 align-middle whitespace-nowrap">
                  {image ? <img src={image} alt={email} /> : null}
                  {email}
                </td>
                <td className="px-4 py-2 align-middle whitespace-nowrap">
                  {name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
}
