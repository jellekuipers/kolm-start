import { createFileRoute } from "@tanstack/react-router";

import { Logo } from "~/components/logo";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Logo />
      <h1 className="font-bold">kolm start</h1>
    </>
  );
}
