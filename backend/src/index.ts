import Fastify from "fastify";
import { env } from "./utils/env";

const fastify = Fastify({ logger: false });

fastify.get("/", async () => {
    return { hello: "world" };
});

try {
    await fastify.listen({ port: env.PORT });
    console.log(`Server listening on port ${env.PORT}`);
}
catch (err) {
    console.error(err);
    process.exit(1);
}
