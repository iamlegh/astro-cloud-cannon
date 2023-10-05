import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(["Cisco", "Fañch", "IamLegh"]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z
      .string()
      .max(
        160,
        "Pour de meilleurs scores SEO, il est préférable de ne pas dépasser 160 characters."
      ),
    draft: z.boolean().default(false),
    category: z.enum(["CSS", "Documents de référence", "Astro", "General"]),
  }),
});

export const collections = { blog };
