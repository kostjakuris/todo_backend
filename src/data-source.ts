import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Todo } from './entities/todo-entity.js';
import { Task } from './entities/task-entity.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  host: String(process.env.POSTGRES_HOST),
  port: Number(process.env.POSTGRES_PORT),
  database: String(process.env.POSTGRES_DB),
  synchronize: true,
  logging: false,
  entities: [Task, Todo],
  subscribers: [],
  migrations: [],
});