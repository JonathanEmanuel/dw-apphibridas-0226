import express from 'express';

import UsuarioController from '../controllers/usuario.controller.js'

const controller = new UsuarioController();

const router = express.Router();
router.get('/',         controller.getAll  );
router.get('/:uid',     controller.getById );
router.post('/',        controller.create  );
router.put('/:uid',     controller.update  );
router.delete('/:uid',  controller.delete  );


export default router