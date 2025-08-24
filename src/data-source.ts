import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Todo } from './entities/todo-entity.js';
import { Task } from './entities/task-entity.js';

const password = encodeURIComponent(String(process.env.DATABASE_PASSWORD));
const port = Number(process.env.DATABASE_PORT);
const host = String(process.env.DATABASE_HOST);

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: `postgresql://postgres.${host}:${password}@aws-1-eu-north-1.pooler.supabase.com:${port}/postgres`,
  ssl: {rejectUnauthorized: false},
  synchronize: true,
  logging: false,
  entities: [Task, Todo],
  subscribers: [],
  migrations: [],
});