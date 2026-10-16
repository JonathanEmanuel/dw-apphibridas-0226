import chalk from 'chalk';
import express from 'express';
import Turnos from './Turnos.js';

const app = express();
const port = 5000;
let count = 0;
const appTurnos = new Turnos();


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
/*
const getTurnos = (req, res)=> {
    const turnos = appTurnos.obtener()
    console.table( turnos );
    res.status(200).send(  turnos)
}
app.get('/api/turnos', getTurnos);
*/
app.get('/api/turnos', (req, res)=> {
    const turnos = appTurnos.obtener()
    console.table( turnos );
    res.status(200).json(  turnos)
});


app.get('/api/turnos/:id', (req, res)=> {
    const id =  req.params.id;
    const turno = appTurnos.obtenerPorId(id)
    if( !turno){
        return res.status(404).json({ message: 'Not Found'});
    }
    console.table( turno );
    res.status(200).json( turno);
});

app.post('/api/turnos', (req, res)=> {
    console.log('POST Turnos')
    res.status(200).send( 'POST');
});

app.put('/api/turnos', (req, res)=> {
    console.log('PUT Turnos')
    res.status(200).send( 'PUT');
});


app.delete('/api/turnos', (req, res)=> {
    console.log('DELETE Turnos')
    res.status(200).send( 'DELETE');
});

app.listen(port, () => {
    console.log( chalk.bgGreen(`Servidor Web en el puerto ${port}`)  );
})