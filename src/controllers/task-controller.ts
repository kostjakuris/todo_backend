import taskService from '../services/task-service.js';
import type { Request, Response } from 'express';
import { type CreateTaskDto, DeleteTaskDto, EditTaskDto, EditTaskPositionDto, GetTasksDto } from '../dtos/task-dto.js';

class TaskController {
  async getAllTasks(req: Request, res: Response) {
    try {
      const {id} = req.query as unknown as GetTasksDto;
      const tasks = await taskService.getAllTasks(String(id));
      res.json(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async createTask(req: Request<{}, {}, CreateTaskDto, {}>, res: Response) {
    try {
      const {id, name, description, position, status, priority} = req.body;
      const task = await taskService.createTask({id, name, description, position, status, priority});
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async editTask(req: Request<{}, {}, EditTaskDto, {}>, res: Response) {
    try {
      const {id, name, description, position, status, priority} = req.body;
      const task = await taskService.editTask({id, name, description, position, status, priority});
      res.json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async editTaskPosition(req: Request<{}, {}, EditTaskPositionDto, {}>, res: Response) {
    try {
      const {list} = req.body;
      const updated = await taskService.editTaskPosition(list);
      res.json(updated);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async deleteTask(req: Request<{}, {}, DeleteTaskDto, {}>, res: Response) {
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