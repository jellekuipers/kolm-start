import { createTRPCContext } from "@trpc/tanstack-react-query";

import { AppRouter } from "~/trpc/router";

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();
