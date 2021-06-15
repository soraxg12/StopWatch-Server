import express from 'express';
import cors from 'cors';
import { router } from './routes';
//criando app
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use('/', router);

export { app };