import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task-entity.js';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @OneToMany(() => Task, task => task.todo, {onDelete: 'CASCADE'})
  tasks: Task[] | undefined;
  
  constructor() {
    this.id = 0;
    this.name = '';
    this.tasks = undefined;
  }
  
}