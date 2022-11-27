import { Router } from 'npm:express';
import { getTasks, createTask, getTask, deleteTask, updateTask } from '../controllers/tasks.controller.ts';

const router = Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.get('/tasks/:id', getTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);

export default router;