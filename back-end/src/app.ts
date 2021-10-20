import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

import { router } from './routes';

const app = express();

//* Habilitando CORS na aplicação
app.use(cors());

const serverHttp = http.createServer(app);

//* Habilitando CORS no webSocket
const io = new Server(serverHttp, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log(`Usuário conectado no socket ${socket.id}`);
});

//* Habilitando a aceitabilidade de corpos JSON no Body da requisição
app.use(express.json());

app.use(router);

//* Rota de Login do github
app.get('/github', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

//* Rota de callback
app.get('/signin/callback', (req, res) => {
  const { code } = req.query;

  return res.json(code);
});

export { serverHttp, io };
