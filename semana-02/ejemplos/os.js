const os = require('os');
console.log('Plataforma');
console.log( os.platform()  );

console.log('Memoria');
console.log( os.totalmem()  );

console.log('CPUs');
console.log( os.cpus().length  );

console.log( os.cpus()[0].model );

console.log(  os.networkInterfaces());