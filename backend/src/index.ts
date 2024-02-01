import "dotenv/config";

import Fastify from "fastify";
import jwt from "@fastify/jwt";
import { env } from "./utils/env";
import { usersRoutes } from "./routes/users";
import { authRoutes } from "./routes/auth";

const fastify = Fastify({ logger: false });

fastify.register(jwt, {
    secret: env.JWT_SECRET,
});

fastify.register(usersRoutes);
fastify.register(authRoutes);

try {
    await fastify.listen({ port: env.PORT });
    console.log(`Server listening on port ${env.PORT}`);
} catch (err) {
    console.error(err);
    process.exit(1);
}
