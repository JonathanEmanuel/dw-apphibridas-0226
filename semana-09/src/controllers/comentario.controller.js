import Comentario from '../models/comentario.model.js'

class ComentarioController {
    async create(req, res){
        try {
            const { detalle, punto } = req.body;
                if( !detalle || !punto){
                    return res.status(403).json({ 
                        mensaje: 'Faltan campos obligatorios'
                    });
                }
                const usuario = req.usuario;

                const comentario = await Comentario.create({detalle, usuario: usuario._id, punto });
    
                res.json({ 
                            mensaje: 'Comentario Creado',
                            datos: comentario
                        });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
}

export default ComentarioController;