import { 
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply 
} from "fastify";

import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', (request: FastifyRequest, reply: FastifyReply) => {

        const response = {
            "data": {
                "nome": "Joao Gabriel",
                "sexo": "Masculino",
                "idade": 21,
                "altura": 1.78,
                "peso": 70,
                "objetivo": "Hipertrofia",
                "refeicoes": [
                {
                    "horario": "08:00",
                    "nome": "Café da Manhã",
                    "alimentos": [
                    "2 fatias de pão integral",
                    "2 ovos mexidos com 1 fatia de queijo branco",
                    "1 banana",
                    "1 copo de leite desnatado"
                    ]
                },
                {
                    "horario": "10:30",
                    "nome": "Lanche da Manhã",
                    "alimentos": [
                    "1 iogurte grego com granola e frutas vermelhas"
                    ]
                },
                {
                    "horario": "13:00",
                    "nome": "Almoço",
                    "alimentos": [
                    "150g de frango grelhado",
                    "1 xícara de arroz integral",
                    "1 xícara de brócolis cozido",
                    "Salada verde com azeite de oliva e vinagre"
                    ]
                },
                {
                    "horario": "15:30",
                    "nome": "Lanche da Tarde",
                    "alimentos": [
                    "1 batata doce média cozida",
                    "1 scoop de whey protein"
                    ]
                },
                {
                    "horario": "19:00",
                    "nome": "Jantar",
                    "alimentos": [
                    "150g de peixe assado",
                    "1 xícara de batata doce cozida",
                    "1 xícara de espinafre cozido"
                    ]
                },
                {
                    "horario": "21:00",
                    "nome": "Lanche da Noite",
                    "alimentos": [
                    "1 pote de iogurte grego com 1 colher de sopa de chia"
                    ]
                }
                ],
                "suplementos": [
                "Whey Protein",
                "Creatina",
                "BCAA",
                "Glutamina"
                ]
            }
        }

        return response;
    });

    fastify.post('/create', async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply);    
    })
}