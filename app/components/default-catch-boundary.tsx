import {
  ErrorComponent,
  type ErrorComponentProps,
} from "@tanstack/react-router";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  console.error(error);

  return <ErrorComponent error={error} />;
}
