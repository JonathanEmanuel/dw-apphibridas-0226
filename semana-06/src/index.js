import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routerAPI from './routes/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use( express.json() );
app.use( express.static('public'));
// Proxima clase mejorar!
mongoose.connect( MONGODB_URI );

routerAPI(app);

app.listen( PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
})