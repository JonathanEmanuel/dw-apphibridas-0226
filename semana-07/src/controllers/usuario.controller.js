import Usuario from '../models/usuario.model.js'

class UsuarioController {
    async getAll(req, res){
        try {
            const usuarios = await Usuario.find();
            res.json({
                mensaje: 'Listado de usuarios',
                datos: usuarios
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
    async getById(req, res){
        try {
            const id = req.params.uid;
            const usuario = await Usuario.findById(id);

            if( !usuario){
                return res.status(404).json({ mensaje: 'Usuario no encontrado'});
            }
            res.json({
                mensaje: 'datos del usuario',
                datos: usuario
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
    async create(req, res){
        try {
            const { nombre, email, clave, edad} = req.body;
            if( !nombre || !email || !clave){
                return res.status(403).json({ 
                    mensaje: 'Faltan campos obligatorios'
                });
            }

            const usuario = await Usuario.create({nombre, email, clave, edad})

            res.json({ 
                        mensaje: 'Usuario Guardado',
                        datos: usuario
                    });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
    async update(req, res){
        try {
            const id = req.params.uid;
            const { nombre, email, clave} = req.body;
            const usuario = await Usuario.findByIdAndUpdate( id, { nombre, email, clave});

            res.json({ mensaje: 'Actualización de usuario'});
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
    async delete(req, res){
        try {
            const id = req.params.uid;
            const usuario =  await Usuario.findByIdAndDelete(id);

            if( !usuario){
                return res.status(404).json({ mensaje: 'Usuario no encontrado'});
            }
            res.json({ mensaje: 'Usuario Eliminado'});
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }

    }
}

export default UsuarioController