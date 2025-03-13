import "dotenv/config";

import { db } from "~/db";

import * as schema from "./schema";

async function main() {
  const user: typeof schema.user.$inferInsert = {
    id: "66d6f086-6899-4123-8bc5-ce56fb59368a",
    name: "Kolm Start",
    email: "name@kolm.start",
    emailVerified: true,
    isAnonymous: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await db.insert(schema.user).values(user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Done seeding database.");
    process.exit(0);
  });
