class Gestor {
    turnos = [];
    constructor(){

    }
    agregar( nombre, fecha, tratamiento ){
        const turno = {
            nombre: nombre,
            fecha: fecha,
            tratamiento: tratamiento
        }
        // con this referenciamos a la clase
        this.turnos.push( turno );
    }

    agregar2( nombre, fecha, tratamiento ){
        // con this referenciamos a la clase
        this.turnos.push( {
            nombre: nombre,
            fecha: fecha,
            tratamiento: tratamiento
        });
    }

    agregar3( nombre, fecha, tratamiento ){
        // con this referenciamos a la clase
        this.turnos.push( { nombre, fecha, tratamiento });
    }
}

const appTurnos = new Gestor();

appTurnos.agregar('Luna', '07-08-26', 'Vacunación');
appTurnos.agregar('Laika', '20-09-2026', 'Chequeo General');

console.table( appTurnos.turnos );