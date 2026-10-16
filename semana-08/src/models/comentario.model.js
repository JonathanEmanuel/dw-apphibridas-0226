import mongoose from "mongoose";

const esquema = mongoose.Schema({
    detalle: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 512
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    punto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Punto'
    },
    creado: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Punto = mongoose.model('Punto', esquema);
export default Punto;