import chalk from 'chalk';
import express from 'express';
import Turnos from './models/Turnos.js';
import Usuarios from './models/Usuarios.js';

const app = express();
const port = 5000;
let count = 0;
const modeloTurnos = new Turnos();
const modeloUsuarios = new Usuarios();

// Middleware --> Tema de la proxíma clas
app.use( express.urlencoded());
app.use( express.json() );

app.get('/', (req, res) => {
    count++;
    console.log( `Cliente conctado ${count}`);
    res.send(`
            <h1>Hola desde Express 👋.</h1>
            <p> Cliente Número ${count}</p>
            <ul>
                <li> <a href="/api/turnos"> Get Turnos</a></li>
            </ul>
        `);
});

app.get('/api/usuarios', (req, res) => {
    
    res.send(`
        <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Usuarios</title>
            </head>
            <body>
                <h1>Usuarios</h1>
                <form action="/api/usuarios" method="post">
                    <label for="nombre">nombre</label>
                    <input type="text" name="nombre">

                    <label for="email">Email</label>
                    <input type="email" name="email">

                    <label for="clave">Clave</label>
                    <input type="password" name="clave">

                    <button type="submit">Guardar</button>
                </form>
            </body>
            </html>`);
})

app.get('/api/usuarios/:uid', async (req, res) => {
    const _id = req.params.uid;
    const usuario = await modeloUsuarios.obtenerPorId(_id);
    if( usuario) {
        res.json({
            message: 'success',
            data: usuario
        });
    } else {
        res.status(404).json({
            message: 'Not Found',
            data: {}
        });
    }
})

app.post('/api/usuarios', (req, res) => {
  
    const { nombre, email, clave} = req.body;
    if( !nombre || !email || !clave){
        res.status(400).json({
            message: 'Faltan campos obligatorios'
        });
        return
    }
    modeloUsuarios.agregar(nombre, email, clave);

    console.log('Guardando usuario POST');
    res.send('<h1> Guardando usuarios</h1>');
})

app.delete('/api/usuarios/:uid', async (req, res) => {
    const _id = req.params.uid;
    const fueElimindado = await modeloUsuarios.eliminiarPorId(_id);
    if( fueElimindado){
        return res.json({
            message: 'success'
        })
    } else {
        return res.status(404).json({
            message: 'Not Found'
        })
    }
})


app.get('/api/turnos', (req, res)=> {
    const turnos = modeloTurnos.obtener()
    res.status(200).json({
        message: 'success',
        data: turnos
    })
});


app.get('/api/turnos/:id', (req, res)=> {
    const id =  req.params.id;
    const turno = modeloTurnos.obtenerPorId(id)
    if( !turno){
        return res.status(404).json({ message: 'Not Found'});
    }
    res.status(200).json({
        message: 'success',
        data: turno
    });
});

app.post('/api/turnos', (req, res)=> {
    const { nombre, fecha, tratamiento} = req.body;
    if( !nombre || !fecha || !tratamiento ){
        return res.status(400).json({
            message: 'Faltan campos obligatorios'
        })
    }

    modeloTurnos.agregar( nombre, fecha, tratamiento)

    res.status(200).json({
        message: 'success'
    });
});


app.delete('/api/turnos/:tid', (req, res)=> {
    const _id = req.params.tid;
    const resultado = modeloTurnos.eliminarPorId(_id);
    if( !resultado){
        return res.status(404).json({
            message:'Not found'
        })
    }
    res.status(200).json({
            message:'success'
        })
});


app.put('/api/turnos/:tid', (req, res)=> {
    const { nombre, fecha, tratamiento} = req.body;
    if( !nombre || !fecha || !tratamiento ){
        return res.status(400).json({
            message: 'Faltan campos obligatorios'
        })
    }

    const _id = req.params.tid;

    res.status(200).send( 'PUT');
});





app.listen(port, () => {
    console.log( chalk.bgGreen(`Servidor Web en el puerto ${port}`)  );
})