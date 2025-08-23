import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './todo-entity.js';

export enum Status {
  undone = 'undone',
  done = 'done',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  priority: number;
  
  @Column()
  description: string;
  
  @ManyToOne(() => Todo, todo => todo.tasks, {onDelete: 'CASCADE'})
  todo: Todo | undefined;
  
  @Column({type: 'enum', enum: Status, default: Status.undone})
  status: Status;
  
  @Column({type: 'integer'})
  position: number;
  
  constructor() {
    this.description = '';
    this.priority = 0;
    this.id = 0;
    this.status = Status.undone;
    this.position = 0;
    this.name = '';
    this.todo = undefined;
  }
}