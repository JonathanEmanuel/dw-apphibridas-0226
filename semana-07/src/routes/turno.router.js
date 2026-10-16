import express from 'express';
import { mimiddleware } from '../middlewares/mimiddleware.js';

import TurnoController from '../controllers/turno.controller.js';

const controller = new TurnoController();

const router = express.Router();
// Definimos cada una de las rutas
router.get('/',             controller.getAll  );
router.get('/:uid/usuario', controller.getAllByUser);
router.get('/:tid',         controller.getById );
router.post('/',            controller.create  );
router.put('/:tid',         controller.update  );
router.delete('/:tid', mimiddleware, controller.delete  );


export default router;