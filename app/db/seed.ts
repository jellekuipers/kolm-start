import "dotenv/config";

import { db } from "~/db";

import * as schema from "./schema";

async function main() {
  const user: typeof schema.users.$inferInsert = {
    email: "name@example.com",
    name: "Name",
  };

  await db.insert(schema.users).values(user);

  console.log("User created");
}

main();
