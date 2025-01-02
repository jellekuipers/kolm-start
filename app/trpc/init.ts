import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

import { db } from "~/db";
import { auth } from "~/lib/auth";

export const createContext = async (request: Request) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  return {
    db,
    session,
  };
};

export const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;

const enforceUserIsAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next();
});

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(enforceUserIsAuthenticated);
