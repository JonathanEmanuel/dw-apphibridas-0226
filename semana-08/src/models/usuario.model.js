import mongoose from 'mongoose';

const esquema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 64
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    clave: {
        type: String,
        required: true,
    },
    rol:{
        type: String,
        enum: ['administrador', 'usuario'],
        default: 'usuario'
    },
    creado: {
        type: Date,
        default: Date.now
    }
});

const Usuario = mongoose.model('Usuario', esquema);

export default Usuario;