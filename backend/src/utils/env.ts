import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number(),
    JWT_SECRET: z.coerce.string(),
});

export const env = envSchema.parse(process.env);
