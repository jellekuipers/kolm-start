import { TRPCRouterRecord } from "@trpc/server";

import { protectedProcedure } from "~/trpc/init";

export const userRouter = {
  getAll: protectedProcedure.query(
    async ({ ctx }) => await ctx.db.query.user.findMany(),
  ),
} satisfies TRPCRouterRecord;
