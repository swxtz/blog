import "dotenv/config";

import Fastify from "fastify";
import { env } from "./utils/env";
import { usersRoutes } from "./routes/users";

const fastify = Fastify({ logger: false });

fastify.register(usersRoutes);

try {
    await fastify.listen({ port: env.PORT });
    console.log(`Server listening on port ${env.PORT}`);
} catch (err) {
    console.error(err);
    process.exit(1);
}
