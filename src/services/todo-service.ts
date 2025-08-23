import { AppDataSource } from '../data-source.js';
import { Todo } from '../entities/todo-entity.js';
import { Task } from '../entities/task-entity.js';
import { EditTodoDto } from '../dtos/todo-dto.js';

class TodoService {
  todoRepository: any;
  taskRepository: any;
  
  constructor() {
    this.todoRepository = AppDataSource.getRepository(Todo);
    this.taskRepository = AppDataSource.getRepository(Task);
  }
  
  async getAllTodos() {
    const todos = await this.todoRepository.find();
    if (!todos || todos.length === 0) {
      throw new Error('No todos found');
    }
    return todos;
  }
  
  async createTodo(name: string) {
    const todoExists = await this.todoRepository.findOne({where: {name}});
    if (todoExists) {
      throw new Error('This todo already exists');
    }
    return await this.todoRepository.save({name});
  }
  
  async editTodo({id, name}: EditTodoDto) {
    return await this.todoRepository.update({id}, {name});
  }
  
  async deleteTodo(id: number) {
    const deletedTodo = await this.todoRepository.delete(id);
    if (deletedTodo.affected === 0) {
      throw new Error('Todo not found');
    }
    return deletedTodo;
  }
}

export default new TodoService();
