import { sql } from "drizzle-orm";
import { z } from "zod";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

const publicUrl = z.string().trim().url().max(2000).refine((value) => {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) && url.hostname.includes(".");
  } catch { return false; }
}, "Use a full HTTP or HTTPS link.");

const entryInput = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  platform: z.enum(["instagram", "tiktok", "youtube", "x", "linkedin", "other"]),
  category: z.enum(["website", "ai-agent", "tool", "automation", "brand-package"]),
  videoUrl: publicUrl,
  projectUrl: publicUrl,
  caseStudyUrl: publicUrl,
  runableChatUrl: publicUrl.refine((value) => {
    try {
      const host = new URL(value).hostname;
      return host === "runable.com" || host.endsWith(".runable.com");
    } catch { return false; }
  }, "Use a shareable Runable chat link from runable.com."),
});

export const entries = {
  /** Live entry counter shown next to the submission form. */
  count: base.handler(async () => {
    const [row] = await db
      .select({ value: sql<number>`count(*)`.mapWith(Number) })
      .from(schema.entries);
    return { count: row?.value ?? 0 };
  }),

  create: base.input(entryInput).handler(async ({ input }) => {
    const [entry] = await db
      .insert(schema.entries)
      .values({
        name: input.name.trim(),
        email: input.email.trim().toLowerCase(),
        platform: input.platform,
        videoUrl: input.videoUrl.trim(),
        // Versioned submission details in the existing text column: no destructive migration
        // and older entries remain readable. videoUrl now holds the public showcase post.
        note: JSON.stringify({
          version: 2,
          category: input.category,
          projectUrl: input.projectUrl,
          caseStudyUrl: input.caseStudyUrl,
          runableChatUrl: input.runableChatUrl,
        }),
      })
      .returning();
    return { id: entry?.id ?? 0 };
  }),
};
