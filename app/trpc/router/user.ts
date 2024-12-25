import { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "~/trpc/init";

export const userRouter = {
  me: publicProcedure.query(() => "user"),
} satisfies TRPCRouterRecord;
