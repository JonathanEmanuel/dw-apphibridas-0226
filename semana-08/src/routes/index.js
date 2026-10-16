import usuarioRouter from './usuario.router.js';
import puntoRouter from './punto.router.js';

const routerAPI = (app) => {
    app.use('/api/usuarios',    usuarioRouter );
    app.use('/api/puntos',      puntoRouter   );
}

export default routerAPI;
