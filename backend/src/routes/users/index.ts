import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ZodError, z } from "zod";
import { prisma } from "../../utils/prisma";
import argon2 from "argon2";

export async function usersRoutes(app: FastifyInstance) {
    app.post("/users", async (req: FastifyRequest, reply: FastifyReply) => {
        const bodySchema = z.object({
            email: z.string().email(),
            username: z.string(),
            password: z.string(),
        });

        try {
            const { email, password, username } = bodySchema.parse(req.body);

            const verifyUser = await prisma.user.findUnique({
                where: { email },
                select: { id: true, username: true },
            });

            if (verifyUser && verifyUser.username === username) {
                return reply
                    .status(400)
                    .send({ error: "Username already exists" });
            }

            if (verifyUser) {
                return reply.status(400).send({ error: "User already exists" });
            }

            const hash = await argon2.hash(password);

            const user = await prisma.user.create({
                data: {
                    email,
                    username,
                    password: hash,
                },
            });

            return reply
                .status(201)
                .send({ message: "Usuario criado com sucesso", user });
        } catch (err) {
            if (err instanceof ZodError) {
                return reply.status(400).send({ error: err.issues });
            }

            return reply.status(500).send({ error: err });
        }
    });
}
