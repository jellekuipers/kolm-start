import { createFileRoute, Link } from "@tanstack/react-router";

import { trpc } from "~/trpc/react";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: user, isLoading: isLoadingUser } = trpc.user.me.useQuery();

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2 p-4">
      <h2 className="font-bold">
        {isLoadingUser ? "Loading.." : `Welcome, ${user}`}
      </h2>
      <Link className="text-blue-500 underline" to="/">
        Home
      </Link>
    </div>
  );
}
