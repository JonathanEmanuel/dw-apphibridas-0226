class Mascota {
    // Atributos
    nombre = "";
    raza = "";
    legajo = "";
    constructor(nombre, raza, legajo){
        this.nombre = nombre;
        this.raza = raza;
        this.legajo = legajo;
        //console.log('Soy el constructor')
    }
    // Methods
    getName(){
        return this.nombre;
    }
}

const m1 = new Mascota('Luna', 'Perro', 2);
const m2 = new Mascota('Laika', 'perro', 3);


console.log( m1.getName() );
console.log( m2.getName() );

