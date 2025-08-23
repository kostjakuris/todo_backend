import { AppDataSource } from '../data-source.js';
import { Task } from '../entities/task-entity.js';
import { Todo } from '../entities/todo-entity.js';
import { type CreateTaskDto, EditTaskDto, EditTaskPositionDto } from '../dtos/task-dto.js';

export class TaskService {
  taskRepository: any;
  todoRepository: any;
  
  constructor() {
    this.taskRepository = AppDataSource.getRepository(Task);
    this.todoRepository = AppDataSource.getRepository(Todo);
  }
  
  async getAllTasks(id: string) {
    const correctId = Number(id);
    const todo = await this.todoRepository.findOne({where: {id: correctId}});
    
    if (!todo) {
      throw new Error('Todo Not Found');
    }
    
    const tasks = await this.taskRepository.find({where: {todo}});
    return await this.filterTasks(tasks);
  }
  
  async createTask({id, name, description, position, status, priority}: CreateTaskDto) {
    const todo = await this.todoRepository.findOne({where: {id}});
    if (!todo) {
      throw new Error('This todo wasn`t found');
    }
    
    return await this.taskRepository.save({
      name,
      description,
      todo,
      position,
      status,
      priority
    });
  }
  
  async editTask(dto: EditTaskDto) {
    const { id, ...rest } = dto;
    
    const updateData = Object.fromEntries(
      Object.entries(rest).filter(([_, value]) => value !== undefined && value !== '')
    );
    
    return await this.taskRepository.update({ id }, updateData);
  }
  
  async editTaskPosition(list: EditTaskPositionDto[]) {
    const changedList = await this.changeTasksPosition(list);
    
    for (const item of changedList) {
      await this.taskRepository.update(
        {id: item.id},
        {
          name: item.name,
          description: item.description,
          position: item.position,
          status: item.status,
        }
      );
    }
    
    return changedList;
  }
  
  async deleteTask(id: number) {
    return await this.taskRepository.delete(id);
  }
  
  async changeTasksPosition(tasks: any) {
    const correctTasks: any = {};
    
    tasks.forEach((task: Task, index: number) => {
      correctTasks[task.id] = {
        ...task,
        position: index + 1,
      };
    });
    
    return tasks.map((task: Task) => correctTasks[task.id]);
  }
  
  async filterTasks(tasks: Task[]) {
    const undoneTasks = tasks.filter((task: Task) => task.status === 'undone');
    const doneTasks = tasks.filter((task: Task) => task.status === 'done');
    return {undone: undoneTasks, done: doneTasks, all: tasks};
  }
}

export default new TaskService();
