// This _app component functions as a layout component that wraps all other routes in the app. It is a good place to put things like a header, footer, or sidebar that you want to appear on every page of your app.
import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
} from "@tanstack/react-router";

import { Logo } from "~/components/logo";
import { Spinner } from "~/components/spinner";
import { signIn, signOut, useSession } from "~/lib/auth-client";

export const Route = createFileRoute("/_app")({
  component: LayoutComponent,
});

function Header() {
  const { data: session, isPending, error } = useSession();
  const navigate = useNavigate();

  return (
    <header className="px-4 h-16 flex items-center">
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
        {isPending ? (
          <Spinner />
        ) : error ? null : session ? (
          <>
            <Link
              activeProps={{ className: "underline" }}
              className="font-medium hover:underline"
              to="/users"
            >
              Users
            </Link>
            <button
              className="rounded-md bg-black px-3 py-2 font-semibold text-white hover:bg-black/80"
              onClick={() =>
                signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      navigate({
                        to: "/",
                      });
                    },
                  },
                })
              }
              type="submit"
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            className="rounded-md bg-black px-3 py-2 font-semibold text-white hover:bg-black/80"
            onClick={async () =>
              await signIn.anonymous({
                fetchOptions: {
                  onSuccess: () => {
                    navigate({
                      to: "/users",
                    });
                  },
                },
              })
            }
            type="submit"
          >
            Sign in
          </button>
        )}
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
