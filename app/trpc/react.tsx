import { createTRPCContext } from "@trpc/tanstack-react-query";

import type { AppRouter } from "~/trpc/router";

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();
