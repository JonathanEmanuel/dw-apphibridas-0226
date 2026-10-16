import mongoose from "mongoose";
const ESTADOS = ['pendiente', 'realizado', 'cancelado'];
const esquema = mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    tratamiento: {
        type: String,
        trim: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
    },
    estado:{
        type: String,
        emun: [ESTADOS],
        default:'pendiente'
    }
});
const Turno = mongoose.model('turnos', esquema);

export default Turno;