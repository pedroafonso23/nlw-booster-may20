// No prompt:
// npm install typescript -D    ---> instala o TS somente para desenvolvedor
// npm install @types/express -D   ---> fazer express funcionar com TS
// npm install ts-node -D   ---> instala o node versao TS
// npx tsc --init   ---> cria file de config do TS
// npx ts-node src/server.ts    ---> inicia o server
// npm install ts-node-dev -D  ---> para reiniciar o server automaticamente
// Add "dev": "ts-node-dev src/server.ts" dentro de scripts no package.json
// npm run dev  ---> rodar server

import express from 'express'
import routes from './routes'
import cors from 'cors'
import path from 'path'
import { errors } from 'celebrate'

const app = express()

app.use(cors()) // Permitindo que todas urls acessem (sem problemas durante development)
app.use(express.json()) // Configurando o express para trabalhar com JSON
app.use(routes) // Para usar as rotas exportadas de routes.ts

// Servir arquivos estaticos
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

// Ouvir uma porta
app.listen(3333);