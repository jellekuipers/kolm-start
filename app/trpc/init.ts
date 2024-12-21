import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const createContext = () => ({});

export const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
