const fs = require('fs');
const ruta = './nota.txt';
// Lectura de Archivo
const datos = fs.readFileSync(ruta, 'utf-8');

console.log(datos );

const texto = 'Ahora el texto está modificado';
// Escritura de Archivo
fs.writeFileSync(ruta, texto);
