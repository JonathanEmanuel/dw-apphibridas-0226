import express from 'express'

import PuntoController from '../controllers/punto.controller.js'

const controller = new PuntoController();
const router = express.Router();

router.get('/',         controller.getAll   );
router.post('/',        controller.create   );

export default router;
