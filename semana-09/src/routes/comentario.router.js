import express, { Router } from 'express';
import ComentarioController from '../controllers/comentario.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const controller = new ComentarioController();

const router = express.Router()

router.post('/', authMiddleware,     controller.create);

export default router;