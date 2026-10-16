import jsonwebtoken from 'jsonwebtoken';
/* 
    1.Verica si se paso el token
    2.Verica si el token en valido en base a la SECRET_KEY
*/

const SECRET_KEY = process.env.SECRET_KEY;
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // 1.
    if(!authHeader){
        return res.status(401).json({
            mensaje: 'No se paso el token'
        })
    }

    const token = authHeader.split(' ')[1];
    // 2.
    try {
        const decoded = jsonwebtoken.verify(token, SECRET_KEY);
        req.usuario = decoded;

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            mensaje: 'Token Invalido'
        })
    }

    next();
}

export default authMiddleware;

