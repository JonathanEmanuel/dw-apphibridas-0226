import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import routerAPI from './routes/index.js';
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use( express.json());

routerAPI(app);


conectarDB();

app.listen( PORT, () => { console.log(`API Rest corriendo en el puerto ${PORT}`)});
