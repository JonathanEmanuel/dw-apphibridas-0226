import fs from 'fs';

class Turnos {
    turnos = [];
    constructor(){
        this.turnos = [];
        this.ruta = './jsons/turnos.json';
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
        this.id++;
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
        /*
        let turno = null;
        for (let i = 0; i < this.turnos.length; i++) {
            if( this.turnos[i].id == id){
                turno = this.turnos[i];
            }
        }
        return turno;
        */
    }
    eliminarPorId(id){

    }
    actualizarPorId(id, turno){

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