import "dotenv/config";

import { defineConfig, type Config } from "drizzle-kit";

export default defineConfig({
  schema: "./app/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
}) satisfies Config;
