import { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "~/trpc/init";

export const userRouter = {
  me: publicProcedure.query(
    async ({ ctx }) => await ctx.db.query.users.findFirst(),
  ),
} satisfies TRPCRouterRecord;
