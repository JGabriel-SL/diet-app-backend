import { 
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply 
} from "fastify";

import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/hello', (request: FastifyRequest, reply: FastifyReply) => {
        reply.send('Hello, World!');
    });

    fastify.post('/create', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply);    
    })
}