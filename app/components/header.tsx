import { Link } from "@tanstack/react-router";

import { Logo } from "~/components/logo";
import { Spinner } from "~/components/spinner";
import { trpc } from "~/trpc/react";

export function Header() {
  const { data: user, isLoading: isLoadingUser } = trpc.user.me.useQuery();

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
        {isLoadingUser ? (
          <Spinner />
        ) : user ? (
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
