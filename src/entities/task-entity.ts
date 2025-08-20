import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from './todo-entity.js';

export enum Status {
  toDo = 'to do',
  inProgress = 'in progress',
  done = 'done',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @Column({default: ''})
  description?: string;
  
  @ManyToOne(() => Todo, todo => todo.tasks, {onDelete: 'CASCADE'})
  todo: Todo | undefined;
  
  @Column({type: 'enum', enum: Status, default: Status.toDo})
  status: Status;
  
  @Column({type: 'integer'})
  position: number;
  
  constructor() {
    this.id = 0;
    this.status = Status.toDo;
    this.position = 0;
    this.name = '';
    this.todo = undefined;
  }
}