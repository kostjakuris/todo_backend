import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
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
  
  @IsNumber({}, {message: 'Priority must be a number'})
  @IsNotEmpty({message: 'Priority is required'})
  priority!: number;
  
  @IsNumber({}, {message: 'Todo id must be a number'})
  @IsNotEmpty({message: 'Todo id is required'})
  id!: number;
  
  @IsString({message: 'Description must be a string'})
  @IsNotEmpty({message: 'Description is required'})
  description!: string;
  
  @IsNumber({}, {message: 'Position be a number'})
  @IsNotEmpty({message: 'Position is required'})
  position!: number;
  
  @IsOptional()
  @IsEnum(Status, {message: 'Status must be undone or done'})
  status?: Status;
}

export class EditTaskDto {
  @IsNumber({}, {message: 'Task id must be a number'})
  @IsNotEmpty({message: 'Task id is required'})
  id!: number;
  
  @IsString({message: 'Task name must be a string'})
  @IsOptional()
  name?: string;
  
  @IsNumber({}, {message: 'Priority must be a number'})
  @IsOptional()
  priority?: number;
  
  @IsString({message: 'Description must be a string'})
  @IsOptional()
  description?: string;
  
  @IsNumber({}, {message: 'Position be a number'})
  @IsOptional()
  position!: number;
  
  @IsOptional()
  @IsEnum(Status, {message: 'Status must be undone or done'})
  status?: Status;
}

export class EditTaskPositionDto {
  @IsArray({message: 'List must be array'})
  @IsNotEmpty({message: 'List is required'})
  list!: any[];
}

export class DeleteTaskDto {
  @IsNumber({}, {message: 'Id must be a number'})
  @IsNotEmpty({message: 'Id is required'})
  readonly id!: number;
}
