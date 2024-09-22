## Backend for Diet App with Gemini Integration

### API created with Fastify to create a diet plan and send to client.

... wait to see the news ...

### Routes

- POST - /create
### Body (JSON):
Example:
```json
{
  "name": "João Gabriel",
  "weight": "70",
  "height": "1.78",
  "age": "21",
  "level": "Atividade constante, 4-5 dias da semana",
  "gender": "Masculino",
  "objective": "hipertrofia"
}
```
return:
```json
{
  "data": {
    "nome": "João Gabriel",
    "sexo": "Masculino",
    "idade": 21,
    "altura": 1.78,
    "peso": 70,
    "objetivo": "hipertrofia",
    "refeicoes": [
      {
        "horario": "08:00",
        "nome": "Café da Manhã",
        "alimentos": [
          "2 fatias de pão integral",
          "2 ovos mexidos",
          "1 banana",
          "200ml de leite desnatado",
          "1 colher de sopa de azeite de oliva"
        ]
      },
      {
        "horario": "10:00",
        "nome": "Lanche da Manhã",
        "alimentos": [
          "1 iogurte grego natural com granola",
          "1 fruta de sua preferência"
        ]
      },
      {
        "horario": "13:00",
        "nome": "Almoço",
        "alimentos": [
          "150g de frango grelhado",
          "1 xícara de arroz integral",
          "1 xícara de brócolis cozido",
          "1 batata doce média cozida"
        ]
      },
      {
        "horario": "15:30",
        "nome": "Lanche da Tarde",
        "alimentos": [
          "1 scoop de whey protein",
          "1 fruta de sua preferência"
        ]
      },
      {
        "horario": "19:00",
        "nome": "Jantar",
        "alimentos": [
          "150g de carne vermelha magra grelhada",
          "1 xícara de batata doce cozida",
          "1 xícara de salada verde"
        ]
      },
      {
        "horario": "21:00",
        "nome": "Lanche da Noite",
        "alimentos": [
          "1 scoop de caseína"
        ]
      }
    ],
    "suplementos": [
      "whey protein",
      "creatina",
      "BCAA",
      "glutamina"
    ]
  }
}
```
