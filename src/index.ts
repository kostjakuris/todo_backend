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

app.use(cors({
  origin: ['https://todo-backend-one-rust.vercel.app', 'http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

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