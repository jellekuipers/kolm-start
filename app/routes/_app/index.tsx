import { createFileRoute } from "@tanstack/react-router";

import { Logo } from "~/components/logo";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <center>
      <Logo />
      <h1 className="font-black text-2xl">kolm start</h1>
    </center>
  );
}
