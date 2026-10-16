import Turno from '../models/turno.model.js'

class TurnoController {
    async getAllByUser(req, res){
        try {
            const uid = req.params.uid;
            const turnos = await Turno.find({ usuario: uid} ).populate('usuario');

            res.json({
                mensaje: 'Listado de Turnos del usuario',
                datos: turnos
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }


    }
    async getAll(req, res){
        try {
            const { estado } = req.query;
            const filtro = {};
            
            if( estado){
                filtro.estado = estado;
            }
            const turnos = await Turno.find(filtro).populate('usuario').sort({fecha: 1});

            res.json({
                mensaje: 'Listado de Turnos',
                datos: turnos
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
    async getById(req, res){
        try {
            const id = req.params.tid;
            const turno = await Turno.findById(id);

            if( !turno){
                return res.status(404).json({
                    mensaje: 'No se encontro el turno',
                    datos: {}
                })
            }

            res.json({ mensaje: 'Turno', datos: turno});
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});  
        }
      
    }
    async create(req, res){
        try {
            const { fecha, tratamiento, usuario} = req.body;

            if(!fecha || !tratamiento || !usuario){
                return res.status(400).json({
                    mensaje: 'Faltan campos obligatorios',
                    datos: {}
                })
            }

            const turno = await Turno.create({ fecha, tratamiento, usuario });

            res.json({ 
                mensaje: 'Turno Creado',
                datos: turno
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});  
        }
    }
    async update(req, res){
        try {
            const id = req.params.tid;
            const { fecha, estado } = req.body;

            const turno = await Turno.findByIdAndUpdate( id, { fecha, estado });
            res.json({ mensaje: 'Turno Actualizado'});
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});  
        }
    }
    async delete(req, res){
        try {
            const id = req.params.tid;
            const turno = await Turno.findByIdAndDelete(id);

            if( !turno){
                return res.status(404).json({
                    mensaje: 'No se encontro el turno',
                    datos: {}
                })
            }
        
            res.json({ mensaje: `Turno [ ${id} ] elimindado`});
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});  
        }
    }
}

export default TurnoController