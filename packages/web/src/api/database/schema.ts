import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/** Challenge entries submitted from the landing page. */
export const entries = sqliteTable("entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  platform: text("platform").notNull(),
  videoUrl: text("video_url").notNull(),
  note: text("note"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});
