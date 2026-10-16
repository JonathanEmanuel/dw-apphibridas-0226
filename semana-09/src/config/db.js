import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const conectarDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Conexión correcta con MongoDB');
    } catch (error) {
        console.error(`Erro al conectarse con MongoDB ${error}`);
        process.exit(1);
    }
}

export default conectarDB;