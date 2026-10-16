import express from 'express';
import dotenv from 'dotenv';
import routerAPI from './routes/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use( express.json() );
app.use( express.static('public'));

routerAPI(app);

app.listen( PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
})