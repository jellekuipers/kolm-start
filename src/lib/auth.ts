import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins/anonymous";
import { tanstackStartCookies } from "better-auth/tanstack-start";

import { db } from "~/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [
    anonymous({
      emailDomainName: "kolm.start",
    }),
    tanstackStartCookies(),
  ],
});
