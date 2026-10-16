const Turnos = require('./Turnos.js');

const appTurnos = new Turnos();

appTurnos.agregar('Luna', '07-08-26', 'Vacunación');
appTurnos.agregar('Laika', '20-09-2026', 'Chequeo General');
appTurnos.agregar('Laika3', '20-09-2026', 'Chequeo General');
//appTurnos.agregar('Laila', '14-09-2026', 'Chequeo General');


console.table( appTurnos.obtener() );

const turno = appTurnos.obtenerPorId('0dce99e6-b450-430c-87c0-8005c860a6c9');
console.log( turno );
