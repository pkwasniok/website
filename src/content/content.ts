import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        draft: z.boolean(),
        publicationDate: z.date(),
        title: z.string(),
        author: z.string(),
        description: z.string(),
    }),
});

export const collections = {
    blog: blogCollection,
};
