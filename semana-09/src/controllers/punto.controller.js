import Punto from "../models/punto.model.js";

class PuntoController {
    async getAll(req, res){
        try {
            const puntos = await Punto.find().populate('usuario', 'nombre email');
            res.json({
                mensaje: 'Listado de puntos',
                datos: puntos
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
    async getById(req, res) {
        try {
            const pid = req.params.pid;
            const punto = await Punto.findById(pid)
                                        .populate({ path: 'usuario', select: 'nombre email creado' })
            
            if( !punto){
                return res.status(404).json({ mensaje: 'Punto no encontrado'});
            }
            res.json({
                mensaje: 'datos del Punto',
                datos: punto
                
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }





    }
    async create(req, res){
        try {
            const { titulo, latitud, longitud } = req.body;
                if( !latitud || !longitud){
                    return res.status(403).json({ 
                        mensaje: 'Faltan campos obligatorios'
                    });
                }
                const usuario = req.usuario;
                // console.log({ usuario});
                const punto = await Punto.create({ titulo, latitud, longitud, usuario: usuario._id });
    
                res.json({ 
                            mensaje: 'Punto Creado',
                            datos: punto
                        });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }

}

export default PuntoController