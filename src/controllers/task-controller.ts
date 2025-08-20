import taskService from '../services/task-service.js';
import type { Request, Response } from 'express';

class TaskController {
  async getAllTasks(req: Request, res: Response) {
    try {
      const {id} = req.query;
      const tasks = await taskService.getAllTasks(String(id));
      res.json(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async createTask(req: Request, res: Response) {
    try {
      const {id, name, description, position} = req.body;
      const task = await taskService.createTask({id, name, description, position});
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async editTask(req: Request, res: Response) {
    try {
      const {id, name, description, position, status} = req.body;
      const task = await taskService.editTask({id, name, description, position, status});
      res.json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async editTaskPosition(req: Request, res: Response) {
    try {
      const {list} = req.body;
      const updated = await taskService.editTaskPosition(list);
      res.json(updated);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async deleteTask(req: Request, res: Response) {
    try {
      const {id} = req.body;
      await taskService.deleteTask(id);
      res.json({message: 'Task deleted'});
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new TaskController();