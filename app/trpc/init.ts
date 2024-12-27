import { initTRPC } from "@trpc/server";
import superjson from "superjson";

import { db } from "~/db";

export const createContext = () => ({
  db,
});

export const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
