import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "./router";

export const trpc = createTRPCReact<AppRouter>();

export const useTRPC = () => {
  return trpc.useUtils();
};
