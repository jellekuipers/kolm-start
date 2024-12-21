import { createTRPCRouter } from "~/trpc/init";
import { userRouter } from "~/trpc/router/user";

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
