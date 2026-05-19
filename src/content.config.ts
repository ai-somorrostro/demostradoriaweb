import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const noticias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.coerce.date(),
    autor: z.string().optional(),
    etiquetas: z.array(z.string()).default([]),
    destacada: z.boolean().default(false),
  }),
});

export const collections = { noticias };
