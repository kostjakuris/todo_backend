import express from 'express';
import TaskController from '../controllers/task-controller.js';
import { validationMiddleware } from '../middlewares/validate-middleware.js';
import { CreateTaskDto, DeleteTaskDto, EditTaskDto, EditTaskPositionDto, GetTasksDto } from '../dtos/task-dto.js';

const router = express.Router();

router.get('/all', validationMiddleware(GetTasksDto), TaskController.getAllTasks);
router.post('/create', validationMiddleware(CreateTaskDto), TaskController.createTask);
router.patch('/edit', validationMiddleware(EditTaskDto), TaskController.editTask);
router.patch('/edit-position', validationMiddleware(EditTaskPositionDto), TaskController.editTaskPosition);
router.delete('/delete', validationMiddleware(DeleteTaskDto), TaskController.deleteTask);

export default router;