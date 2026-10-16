import Usuario from '../models/usuario.model.js'

const model = new Usuario();

class UsuarioController {
    async getAll(req, res){
        const usuarios = await model.find();

        res.json({
            mensaje: 'Listado de Turnos',
            datos: usuarios
        });
    }
    getById(req, res){
        res.json({ mensaje: 'Retorno de Turno'});
    }
    async create(req, res){
        const { nombre, email, clave} = req.body;
        console.log({nombre, email, clave})
        res.json({ mensaje: 'Guardado de Turno'});
    }
    update(req, res){
        res.json({ mensaje: 'Actualización de Turno'});
    }
    delete(req, res){
        res.json({ mensaje: 'Eliminación de Turno'});
    }
}

export default UsuarioController