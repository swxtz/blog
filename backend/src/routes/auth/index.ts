import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { argon } from "../../utils/argon";
import { prisma } from "../../utils/prisma";

export async function authRoutes(app: FastifyInstance) {
    app.post("/auth", async (req: FastifyRequest, reply: FastifyReply) => {
        const bodySchema = z.object({
            email: z.string().email(),
            password: z.string(),
        });

        try {
            const { email, password } = bodySchema.parse(req.body);

            const verifyUser = await prisma.user.findUnique({
                where: { email },
                select: { id: true, password: true, username: true },
            });

            if (!verifyUser) {
                return reply.status(401).send({ error: "Not authorized" });
            }

            const validPassword = await argon.verify(
                verifyUser.password,
                password,
            );

            if (!validPassword) {
                return reply.status(401).send({ error: "Not authorized" });
            }

            const token = app.jwt.sign({
                id: verifyUser.id,
                email,
                username: verifyUser.username,
            });

            return reply.send({ token });
        } catch (err) {
            if (err instanceof ZodError) {
                return reply.status(400).send({ error: err.issues });
            }

            return reply.status(500).send({ error: err });
        }
    });
}
