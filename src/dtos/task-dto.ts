import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Status } from '../entities/task-entity.js';

export class GetTasksDto {
  @IsString({message: 'Todo id must be a string'})
  @IsNotEmpty({message: 'Todo id is required'})
  id!: string;
}

export class CreateTaskDto {
  @IsString({message: 'Task name must be a string'})
  @IsNotEmpty({message: 'Task name is required'})
  name!: string;
  
  @IsNumber({}, {message: 'Todo id must be a number'})
  @IsNotEmpty({message: 'Todo id is required'})
  id!: number;
  
  @IsString({message: 'Description must be a string'})
  @IsNotEmpty({message: 'Description is required'})
  description!: string;
  
  @IsNumber({}, {message: 'Position be a number'})
  @IsNotEmpty({message: 'Position is required'})
  position!: number;
}

export class EditTaskDto {
  @IsNumber({}, {message: 'Task id must be a number'})
  id!: number;
  
  @IsString({message: 'Task name must be a string'})
  name?: string;
  
  @IsString({message: 'Description must be a string'})
  description?: string;
  
  @IsNumber({}, {message: 'Position be a number'})
  @IsNotEmpty({message: 'Position is required'})
  position!: number;
  status?: Status;
}

export class EditTaskPositionDto {
  @IsArray({message: 'List must be array'})
  @IsNotEmpty({message: 'List is required'})
  list!: any[];
}

export class DeleteTaskDto {
  @IsNumber({}, {message: 'Id must be a number'})
  readonly id!: number;
}
