import { useState } from 'react'

import { iniciarSesion } from '../service/api.js'
const Login = () => {
    const [ mensaje, setMensaje] = useState('');
    const [ usuario, setUsuario] = useState({
        email: '',
        clave: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value })
    }

    const handleSubmit = async ( event) => {
        event.preventDefault();
        console.log( usuario);
        try {
            const resultado = await iniciarSesion( usuario.email, usuario.clave);
            console.log( resultado);
            setMensaje( resultado.mensaje)
        } catch (error) {
            console.info(error, typeof(error));
            setMensaje('No se pudo inciar sesion:' , error);
        }

    }

    return (
        <>
        <main>
            <h1>Login</h1>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="email">Email</label>
                <input type="email" value={usuario.email} name='email' onChange={ handleChange }/>

                <label htmlFor="clave">Contraseña</label>
                <input type="password" value={usuario.clave} name='clave' onChange={ handleChange } />

                <button type='submit'>Iniciar Sesión</button>
            </form>
            {
                mensaje ? <p className='msg'>{ mensaje }</p> : null
            }    
                
            
            
        </main>
           
        
        </>
    )
}

export default Login