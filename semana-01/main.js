let nombre = 'José';
console.log(`Hola ${nombre}`);
// Objeto 
const mascota = {
    // Atributos
    nombre: 'Luna',
    raza: 'perro',
    legajo: 10,
    // Métodos
    getName: function() {    // Este objeto
        return "Mi nombre es " + this.nombre; 
    },
    getLegajo() {
        return 'Mi legajo es ...'
    }
}


const mascota2 = {
    // Atributos
    nombre: 'Luna',
    raza: 'perro',
    legajo: 10,
    // Métodos
    getName: function() {    // Este objeto
        return "Mi nombre es " + this.nombre; 
    },
    getLegajo() {
        return 'Mi legajo es ...'
    }
}
mascota.nombre = 'Zaria';
console.log( mascota.nombre);

console.log( mascota.getName() )
