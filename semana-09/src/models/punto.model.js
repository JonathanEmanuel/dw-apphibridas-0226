import mongoose from "mongoose";

const esquema = mongoose.Schema({
    titulo: {
        type: String,
        trim: true,
        maxlength: 64
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    },
    portada: {
        type: String
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    creado: {
        type: Date,
        default: Date.now
    }
})

const Punto = mongoose.model('Punto', esquema);
export default Punto;