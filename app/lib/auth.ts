import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { anonymous } from "better-auth/plugins/anonymous";

import { db } from "~/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [
    anonymous({
      emailDomainName: "example.com",
    }),
  ],
});
