import fastify from "fastify";
import cors from "@fastify/cors";
import dotevn from "dotenv";
import {routes} from "./routes";

const app = fastify({ logger: true })
dotevn.config();

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
})

const start = async () => {
    app.register(cors);
    app.register(routes);

    try {
        await app.listen({ port: 3000, host: '0.0.0.0'});   
        console.log('listening on port 3000' );
    } catch (error) {
        console.log(error);
    }
}

start();