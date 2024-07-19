import express from 'express';
import { createProject, getProjectsByUser, getProjectById } from '../controllers/projectController.js';

const router = express.Router();

router.post('/', createProject);
router.get('/', getProjectsByUser);
router.get('/:projectId', getProjectById);


export default router;
