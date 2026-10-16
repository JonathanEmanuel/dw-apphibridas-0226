import Usuario from '../models/usuario.model.js'

const model = new Usuario();


class UsuarioController {
    async getAll(req, res){
        const usuarios = await model.find();
        res.json({
            mensaje: 'Listado de usuarios',
            datos: usuarios
        });
    }
    async getById(req, res){
        const id = req.params.uid;
        const usuario = await model.findById(id);

        if( !usuario){
            return res.status(404).json({ mensaje: 'Usuario no encontrado'});
        }
        res.json({
            mensaje: 'datso del usuario',
            datos: usuario
        });
    }
    async create(req, res){
        const { nombre, email, clave} = req.body;
        if( !nombre || !email || !clave){
            return res.status(403).json({ 
                mensaje: 'Faltan campos obligatorios'
            });
        }
        console.log({nombre, email, clave})

        const id = await model.create(nombre, email, clave)

        res.json({ mensaje: `Guardado de Usuario con el id ${id}`});
    }
    update(req, res){
        res.json({ mensaje: 'Actualización de usuario'});
    }
    async delete(req, res){
        const id = req.params.uid;
        const eliminado =  await model.findByIdAndDelete(id);

        res.json({ mensaje: 'Eliminación de usuario'});
    }
}

export default UsuarioController