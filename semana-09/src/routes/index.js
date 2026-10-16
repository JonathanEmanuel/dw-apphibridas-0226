import usuarioRouter from './usuario.router.js';
import puntoRouter from './punto.router.js';
import comentarioRouter from './comentario.router.js';

const routerAPI = (app) => {
    app.use('/api/usuarios',    usuarioRouter );
    app.use('/api/puntos',      puntoRouter   );
    app.use('/api/comentario',   comentarioRouter);
}

export default routerAPI;
