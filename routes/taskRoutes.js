import express from 'express';
import { createTask, getTasksByProject, getTasksByUser,updateTaskStatus  } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/project/:projectId', getTasksByProject);
router.get('/user', getTasksByUser);
router.put('/:taskId/status', updateTaskStatus);

export default router;
