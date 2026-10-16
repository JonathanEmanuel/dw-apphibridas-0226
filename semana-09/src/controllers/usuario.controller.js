import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import Usuario from '../models/usuario.model.js';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

class UsuarioController {
    async getAll(req, res){
        try {
            const usuarios = await Usuario.find()
                                        .select('nombre email rol');
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
            const usuario = await Usuario.findById(id).select('-clave');

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
            const { nombre, email, clave, rol} = req.body;
            if( !nombre || !email || !clave){
                return res.status(403).json({ 
                    mensaje: 'Faltan campos obligatorios'
                });
            }
            const hash = await bcrypt.hash( clave, 10);
            const datos = { nombre, email, clave: hash };

            if( rol){
                datos.rol = rol;
            }

            const usuario = await Usuario.create(datos)

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
    async login(req, res){
        try {
            const { email, clave} = req.body;
            if(  !email || !clave){
                return res.status(403).json({ 
                    mensaje: 'Faltan campos obligatorios'
                });
            }
            // Verficamos que el email exista en al base de Datos
            const usuario = await Usuario.findOne({ email});

            if(!usuario){
                return res.status(401).json({ 
                        mensaje: 'Email Invalido',
                        datos: {}
                    });
            }
            // Verificamos el hash
            const esValido = await bcrypt.compare(  clave, usuario.clave  );

            // console.log({esValido});
            if( !esValido){
                return res.status(401).json({ 
                        mensaje: 'Clave Invalida',
                        datos: {}
                    });
            }

            const datos = {
                _id: usuario._id,
                email: usuario.email
            }

            const token = jsonwebtoken.sign(datos, SECRET_KEY, { expiresIn: '1h'} );

            // console.log({token});
            res.json({ 
                        mensaje: 'Usuario Guardado',
                        datos: token
                    });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
    async registro(req, res){
        try {
            const { nombre, email, clave} = req.body;
            if( !nombre || !email || !clave){
                return res.status(403).json({ 
                    mensaje: 'Faltan campos obligatorios'
                });
            }
            const hash = await bcrypt.hash( clave, 10);

            const usuario = await Usuario.create({ nombre, email, clave: hash })

            const datos = {
                _id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email
            }

            res.json({ 
                        mensaje: 'Usuario Guardado',
                        datos
                    });
        } catch (error) {
            console.error(error);
            res.status(500).json({mensaje: 'Error del Servidor'});
        }
    }
}

export default UsuarioController