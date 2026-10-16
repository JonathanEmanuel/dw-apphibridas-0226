import fs from 'fs';

class Turnos {
    turnos = [];
    constructor(){
        this.turnos = [];
        this.ruta = './data/turnos.json';
        this.leerTurnos();

    }
    agregar( nombre, fecha, tratamiento ){
        const id = crypto.randomUUID();
        const turno = {
            id:id,
            nombre: nombre,
            fecha: fecha,
            tratamiento: tratamiento
        }
        // con this referenciamos a la clase
        this.turnos.push( turno );
        this.guardarTurnos();
    }
    obtener(){
        return this.turnos;
    }
    obtenerPorId(id){
        const turno = this.turnos.find( t => t.id == id );
        return turno ? turno : null;
    }
    eliminarPorId(id){
        const index = this.turnos.findIndex( t => t.id == id );
        this.guardarTurnos();
        if( index == -1 ) {
            return false;
        } 
        this.turnos.splice( index, 1);
        return true;
    }
    actualizarPorId(id, turno){
        const index = this.turnos.findIndex( t => t.id == id );
        this.turnos[index].fecha = turno.fecha;
        this.turnos[index].tratamiento = turno.tratamiento;
        this.guardarTurnos();
    }
    guardarTurnos(){ // Guardamos en un Json local los turnos
        const datos = JSON.stringify( this.turnos, null, 2 );
        fs.writeFileSync(this.ruta, datos);
    }
    leerTurnos(){  // Leemos el json local

        if( ! fs.existsSync( this.ruta)){
            this.turnos = [];
            return;
        }

        const datos = fs.readFileSync( this.ruta, 'utf-8');
        this.turnos = JSON.parse( datos);   
    }
}
export default Turnos;