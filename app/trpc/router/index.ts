import { createTRPCRouter } from "~/trpc/init";
import { userRouter } from "~/trpc/router/user";

export const trpcRouter = createTRPCRouter({
  user: userRouter,
});

export type TRPCRouter = typeof trpcRouter;
