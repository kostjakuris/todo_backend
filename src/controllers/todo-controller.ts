import TodoService from '../services/todo-service.js';
import type { Request, Response } from 'express';


class TodoController {
  
  async getTodos(req: Request, res: Response) {
    try {
      const todos = await TodoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async createTodo(req: Request, res: Response) {
    try {
      const {name} = req.body;
      const todo = await TodoService.createTodo(name);
      res.json(todo);
    } catch (error: any) {
      console.error(error);
      res.status(500).json(error);
    }
  }
  
  async editTodo(req: Request, res: Response) {
    try {
      const {id, name} = req.body;
      const updated = await TodoService.editTodo({id, name});
      res.json(updated);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async deleteTodo(req: Request, res: Response) {
    try {
      const {id} = req.body;
      const deleted = await TodoService.deleteTodo(id);
      res.json(deleted);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new TodoController();
