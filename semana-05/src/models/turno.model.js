import fs from 'fs/promises';

class Turnos {
    turnos = [];
    constructor(){
        this.turnos = [];
        this.ruta = './data/turnos.json';
        this.leerJSON();
    }

    async leerJSON(){
        const data = await fs.readFile( this.ruta, 'utf-8');
        this.turnos = data ? JSON.parse(data) : [];
    }
    async guardarJSON(){
        const datos = JSON.stringify( this.turnos, null, 2);
        await fs.writeFile( this.ruta, datos );
    }
    async create( nombre, fecha, tratamiento){
        const _id = crypto.randomUUID();
        const usuario = {
            _id,
            nombre,
            fecha,
            tratamiento
        };
        this.turnos.push(usuario);
        const datos = JSON.stringify( this.turnos, null, 2);
        await fs.writeFile( this.ruta, datos );
        return _id;
    }
    async findById(_id){
        const data = await fs.readFile( this.ruta, 'utf-8');
        this.turnos = JSON.parse(data);
        const turno = this.turnos.find( u => u._id == _id);
        return turno ? turno : null;
    }
    async findByIdAndDelete(_id){
        await  this.leerJSON();
        const index = this.turnos.findIndex( u => u._id == _id);
        if( index == -1){
            return false;
        } 
        this.turnos.splice(index, 1);
        await this.guardarJSON();
        return true;
    }
}

export default Turnos;