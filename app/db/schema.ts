import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }),
  email: varchar({ length: 255 }).notNull().unique(),
});
