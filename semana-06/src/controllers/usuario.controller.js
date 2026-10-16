import Usuario from '../models/usuario.model.js'

class UsuarioController {
    async getAll(req, res){
        const usuarios = await Usuario.find();
        res.json({
            mensaje: 'Listado de usuarios',
            datos: usuarios
        });
    }
    async getById(req, res){
        const id = req.params.uid;
        const usuario = await Usuario.findById(id);

        if( !usuario){
            return res.status(404).json({ mensaje: 'Usuario no encontrado'});
        }
        res.json({
            mensaje: 'datos del usuario',
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

        const usuario = await Usuario.create({nombre, email, clave})

        res.json({ 
                    mensaje: 'Usuario Guardado',
                    datos: usuario
                });
    }
    async update(req, res){
        const id = req.params.uid;
        const { nombre, email, clave} = req.body;

        const usuario = await Usuario.findByIdAndUpdate( id, { nombre, email, clave});

        res.json({ mensaje: 'Actualización de usuario'});
    }
    async delete(req, res){
        const id = req.params.uid;
        const usuario =  await Usuario.findByIdAndDelete(id);

        if( !usuario){
            return res.status(404).json({ mensaje: 'Usuario no encontrado'});
        }
        res.json({ mensaje: 'Usuario Eliminado'});
    }
}

export default UsuarioController