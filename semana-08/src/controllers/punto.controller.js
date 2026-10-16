import Punto from "../models/punto.model.js";

class PuntoController {
    async getAll(req, res){
        try {
            const puntos = await Punto.find();
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
            const punto = await Punto.findById(pid);
            
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
            const { titulo, latitud, logitud } = req.body;
                if( !latitud || !logitud){
                    return res.status(403).json({ 
                        mensaje: 'Faltan campos obligatorios'
                    });
                }
    
                const datos = { titulo, latitud, logitud };
    
                const punto = await Punto.create(datos);
    
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