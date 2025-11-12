import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    rubric: z.enum(['о-нас', 'нейросети', 'психология', 'мастерские', 'маркетинг']),
    theme: z.enum(['amber', 'neon', 'psychology', 'creativity', 'default']).default('default'),
    date: z.string().optional(),
  }),
});

const masters = defineCollection({
  schema: z.object({
    name: z.string(),
    specialty: z.string(),
    avatar: z.string(),
  }),
});

const workshops = defineCollection({
  schema: z.object({
    title: z.string(),
    master: z.string(),
    location: z.object({
      lat: z.number(),
      lng: z.number(),
      city: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

const quizzes = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    questions: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
        options: z.array(z.string()),
      })
    ),
    results: z.record(z.string()), // например: { "a-b": "/master/x" }
  }),
});

const landings = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      image: z.string(),
    }),
    cta: z.object({
      text: z.string(),
      quiz: z.string().optional(),
      url: z.string().optional(),
    }),
  }),
});

export const collections = { blog, masters, workshops, quizzes, landings };