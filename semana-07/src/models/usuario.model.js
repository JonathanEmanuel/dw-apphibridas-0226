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
    edad: {
        type: Number
    },
    clave: {
        type: String,
        required: true,
    },
    rol:{
        type: String,
        enum: ['administrador', 'cliente'],
        default: 'cliente'
    },
    creado: {
        type: Date,
        default: Date.now
    }
});

const Usuario = mongoose.model('usuario', esquema);

export default Usuario;