// This _app component functions as a layout component that wraps all other routes in the app. It is a good place to put things like a header, footer, or sidebar that you want to appear on every page of your app.
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { Logo } from "~/components/logo";
import { Spinner } from "~/components/spinner";
import { trpc } from "~/trpc/react";

export const Route = createFileRoute("/_app")({
  component: LayoutComponent,
});

function Header() {
  const { data, isLoading } = trpc.user.me.useQuery();

  return (
    <header className="p-4">
      <nav className="flex items-center gap-4">
        <Link className="font-medium hover:underline" to="/">
          <Logo />
        </Link>
        <Link
          activeProps={{ className: "underline" }}
          className="font-medium hover:underline"
          to="/"
        >
          Home
        </Link>
        {isLoading ? (
          <Spinner />
        ) : data ? (
          <Link
            activeProps={{ className: "underline" }}
            className="font-medium hover:underline"
            to="/profile"
          >
            Profile
          </Link>
        ) : null}
      </nav>
    </header>
  );
}

// This layout component is a simple layout that includes a header and a main content area. The main content area is where the child routes will be rendered.
function LayoutComponent() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex items-center justify-center flex-col gap-2 p-4 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
