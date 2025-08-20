import express from 'express';
import TaskController from '../controllers/task-controller.js';

const router = express.Router();

router.get('/all', TaskController.getAllTasks);
router.post('/create', TaskController.createTask);
router.patch('/edit', TaskController.editTask);
router.patch('/edit-position', TaskController.editTaskPosition);
router.delete('/delete', TaskController.deleteTask);

export default router;