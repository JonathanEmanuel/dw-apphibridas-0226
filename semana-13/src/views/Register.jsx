import { useState } from 'react'

import { registrarUsuario } from '../service/api.js'
const Register = () => {
    const [ mensaje, setMensaje] = useState('');
    const [ usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        clave: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value })
    }

    const handleSubmit = async ( event) => {
        event.preventDefault();
        const { nombre, email, clave } = usuario
        try {
            const resultado = await registrarUsuario( nombre, email, clave );
            console.log( resultado);
            setMensaje( resultado.mensaje)
        } catch (error) {
            console.info(error, typeof(error));
            setMensaje('No se pudo registrar el usuario:' , error);
        }

    }

    return (
        <>
        <main>
            <h1>Registro</h1>
            <form onSubmit={ handleSubmit }>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" value={usuario.nombre} name='nombre' onChange={ handleChange}/>

                <label htmlFor="email">Email</label>
                <input type="email" value={usuario.email} name='email' onChange={ handleChange }/>

                <label htmlFor="clave">Contraseña</label>
                <input type="password" value={usuario.clave} name='clave' onChange={ handleChange } />

                <button type='submit'>Registrarme</button>
            </form>
            {
                mensaje ? <p className='msg'>{ mensaje }</p> : null
            }    
                
            
            
        </main>
           
        
        </>
    )
}

export default Register