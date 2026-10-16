import mongoose from "mongoose";

const esquema = mongoose.Schema({
    nombre: String,
    fecha: Date,
    tratamiento: String
});
const Turno = mongoose.model('turnos', esquema);

export default Turno;