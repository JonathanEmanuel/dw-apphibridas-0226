import Turno from '../models/turno.model.js'

class TurnoController {
    async getAll(req, res){
        const turnos = await Turno.find();

        res.json({
            mensaje: 'Listado de Turnos',
            datos: turnos
        });
    }
    async getById(req, res){
        const id = req.params.tid;

        const turno = await Turno.findById(id);

        if( !turno){
            return res.status(404).json({
                mensaje: 'No se encontro el turno',
                datos: {}
            })
        }

        res.json({ mensaje: 'Turno', datos: turno});
    }
    async create(req, res){
        const { nombre, fecha, tratamiento} = req.body;

        if(!nombre || !fecha || !tratamiento){
            return res.status(400).json({
                mensaje: 'Faltan campos obligatorios',
                datos: {}
            })
        }

        const turno = await Turno.create({ nombre, fecha, tratamiento });

        res.json({ 
            mensaje: 'Turno Creado',
            datos: turno
        });
    }
    async update(req, res){
        const id = req.params.tid;
        const { nombre, fecha, tratamiento } = req.body;

        const turno = await Turno.findByIdAndUpdate( id, { nombre, fecha, tratamiento})
        res.json({ mensaje: 'Turno Actualizado'});
    }
    async delete(req, res){
        const id = req.params.tid;
        const turno = await Turno.findByIdAndDelete(id);

        if( !turno){
            return res.status(404).json({
                mensaje: 'No se encontro el turno',
                datos: {}
            })
        }
        const nombre = turno.nombre
        res.json({ mensaje: `Turno de [ ${nombre} ] elimindado`});
    }
}

export default TurnoController