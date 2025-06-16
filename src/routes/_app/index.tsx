import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <center>
      <h1 className="font-extrabold text-2xl">Welcome</h1>
    </center>
  );
}
