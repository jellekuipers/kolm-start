import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <center>
      <h1 className="font-extrabold text-2xl">Welcome</h1>
    </center>
  );
}
