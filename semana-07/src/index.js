import express from 'express';
import conectarDB from './config/db.js';
import routerAPI from './routes/index.js';

const app = express();
const PORT = process.env.PORT;

app.use( express.json() );
app.use( express.static('public'));
routerAPI(app);

conectarDB().then( () => {
    app.listen( PORT, () => {
        console.log(`Servidor en el puerto ${PORT}`);
    })
})

