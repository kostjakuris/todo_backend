import express from 'express';
import TodoController from '../controllers/todo-controller.js';
import { validationMiddleware } from '../middlewares/validate-middleware.js';
import { CreateTodoDto, DeleteTodoDto, EditTodoDto } from '../dtos/todo-dto.js';

const router = express.Router();

router.get('/all', TodoController.getTodos);
router.post('/create', validationMiddleware(CreateTodoDto), TodoController.createTodo);
router.patch('/edit', validationMiddleware(EditTodoDto), TodoController.editTodo);
router.delete('/delete', validationMiddleware(DeleteTodoDto), TodoController.deleteTodo);

export default router;