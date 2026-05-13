# JWT API

API REST com autenticação JWT construída com Node.js, TypeScript e Express.

## Tecnologias

- **Node.js** + **TypeScript**
- **Express 5**
- **jsonwebtoken** — geração e validação de tokens JWT
- **tsx** — execução em desenvolvimento
- **tsup** — build para produção

## Requisitos

- Node.js 20+
- npm
- nvm

## Instalação

```bash
nvm use
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
AUTH_SECRET=sua_chave_secreta_aqui
```

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor em modo watch |
| `npm run build` | Compila para `dist/` |
| `npm run start` | Executa o build de produção |

## Endpoints

### Autenticação

```
POST /sessions
```

Realiza login e retorna um token JWT.

**Body:**
```json
{
  "username": "Fabri test",
  "password": "123456"
}
```

**Resposta:**
```json
{
  "token": "eyJhbGci..."
}
```

---

### Produtos

```
GET /products
```

Lista produtos. Rota pública.

---

```
POST /products
```

Cria um produto. Requer autenticação e role `sale`, `admin` ou `master`.

**Headers:**
```
Authorization: Bearer <token>
```

## Estrutura

```
src/
├── config/
│   └── auth.ts               # Configuração do JWT
├── controllers/
│   ├── products-controller.ts
│   └── sessions-controller.ts
├── middlewares/
│   ├── ensureAuthenticated.ts  # Valida o token JWT
│   └── verifyUserAuthorization.ts  # Valida o role do usuário
├── routes/
│   ├── index.ts
│   ├── products.routes.ts
│   └── session.routes.ts
├── types/
│   └── express.ts            # Extensão do Request com user autenticado
├── utils/
│   └── AppError.ts           # Classe de erro com statusCode HTTP
├── app.ts                    # Configuração do Express
└── server.ts                 # Ponto de entrada
```
