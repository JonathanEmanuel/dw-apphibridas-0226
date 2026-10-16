import turnoRouter from './turno.router.js'
import usuarioRouter from './usuario.router.js'

const routerAPI = (app) => {
    app.use('/api/turnos',   turnoRouter);
    app.use('/api/usuarios', usuarioRouter)
}

export default routerAPI