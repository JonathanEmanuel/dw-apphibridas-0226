import mongoose from 'mongoose';

const esquema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String
});

const Usuario = mongoose.model('usuario', esquema);

export default Usuario;