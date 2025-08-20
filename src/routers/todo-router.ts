import express from 'express';
import TodoController from '../controllers/todo-controller.js';

const router = express.Router();

router.get('/all', TodoController.getTodos);
router.post('/create', TodoController.createTodo);
router.patch('/edit', TodoController.editTodo);
router.delete('/delete', TodoController.deleteTodo);

export default router;