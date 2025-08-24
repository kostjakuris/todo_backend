import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { AppDataSource } from './data-source.js';
import taskRouter from './routers/task-router.js';
import todoRouter from './routers/todo-router.js';

dotenv.config();


const app = express();
app.use(express.json());

const corsOptions = {
  origin: String(process.env.FRONTEND_URL),
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/task', taskRouter);
app.use('/todo', todoRouter);

const PORT = process.env.PORT || 5000;

const start = async() => {
  try {
    await AppDataSource.initialize();
    app.listen(PORT, () =>
      console.log(`Server stared on port = ${PORT}`),
    );
  } catch (error) {
    console.log('Error: ', error);
  }
};

start();