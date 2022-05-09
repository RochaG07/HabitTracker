import express, { json } from 'express';
import habitsRoutes from './routes/habits.routes';

const app = express();

app.use(json());

app.use(habitsRoutes);


export default app;