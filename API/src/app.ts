import express, { json } from 'express';

import db from './database/db';
import habitsRoutes from './routes/habits.routes';

const app = express();

const database = new db();
database.connectDB();

app.use(json());

app.use(habitsRoutes);

export default app;