// This auth component functions as a layout component that wraps all authentication routes in the app, prepending related endpoints with /auth
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  beforeLoad: ({ context: { session } }) => {
    if (session?.user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
