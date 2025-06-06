// This _app component functions as a layout component that wraps all authenticated routes in the app. It is a good place to put things like a header, footer, or sidebar that you want to appear on every page of your app.
import {
  Link,
  Outlet,
  createFileRoute,
  redirect,
  useRouter,
} from "@tanstack/react-router";

import { Button } from "~/components/button";
import { Logo } from "~/components/logo";
import { signOut } from "~/lib/auth-client";

export const Route = createFileRoute("/_app")({
  beforeLoad: ({ context: { session } }) => {
    if (!session?.user) {
      throw redirect({
        to: "/auth/sign-in",
      });
    }
  },
  component: LayoutComponent,
});

function Header() {
  const router = useRouter();

  return (
    <header className="p-4 flex items-center justify-between gap-4 w-full">
      <Link className="font-medium hover:underline" to="/">
        <Logo />
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          className="font-semibold hover:underline"
          activeProps={{ className: "underline" }}
          to="/users"
        >
          Users
        </Link>
        <Button
          onClick={async () =>
            await signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.invalidate();
                },
              },
            })
          }
          type="button"
        >
          Sign out
        </Button>
      </nav>
    </header>
  );
}

// This layout component is a simple layout that includes a header and a main content area. The main content area is where the child routes will be rendered.
function LayoutComponent() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="gap-2 p-4 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
