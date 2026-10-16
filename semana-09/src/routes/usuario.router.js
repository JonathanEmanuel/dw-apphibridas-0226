import express from 'express';

import UsuarioController from '../controllers/usuario.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const controller = new UsuarioController();

const router = express.Router();
router.get('/',     authMiddleware,    controller.getAll  );
router.get('/:uid', authMiddleware,    controller.getById );
router.post('/',    authMiddleware,    controller.create  );
router.put('/:uid', authMiddleware,    controller.update  );
router.delete('/:uid', authMiddleware, controller.delete  );
router.post('/login',       controller.login    );
router.post('/registro',    controller.registro);

export default router