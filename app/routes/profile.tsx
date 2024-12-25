import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  loader: ({ context: { trpc } }) => trpc.user.me.fetch(),
  component: RouteComponent,
});

function RouteComponent() {
  const user = Route.useLoaderData();

  return <h2 className="font-bold">Welcome, {user}</h2>;
}
