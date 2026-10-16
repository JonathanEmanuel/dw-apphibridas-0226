import express from 'express';

import PuntoController from '../controllers/punto.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const controller = new PuntoController();
const router = express.Router();

router.get('/',         controller.getAll   );
router.get('/:pid', authMiddleware,     controller.getById);
router.post('/',    authMiddleware,     controller.create   );

export default router;
