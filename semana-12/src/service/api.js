const VITE_API_URL = import.meta.env.VITE_API_URL;

export const obtenerPuntos = async () => {
    try {
        const res = await fetch(`${VITE_API_URL}/puntos`);
        if( !res.ok){
          throw new Error("Error al obtener los puntos");
        }
        const data = await res.json(); 
        return data;

    } catch (error) {
        return error    
    }
}
export const crearPunto = async ( latitud, longitud) => {}

export const iniciarSesion = async ( email, clave) => {
    const res = await fetch(`${VITE_API_URL}/usuarios/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, clave })
    });

    const result = await res.json();
    if( !res.ok){
        throw new Error( result.mensaje || "No se pudo iniciar sesión");
    }

    return result;
}
export const registrarUsuario = async (nombre, email, clave) => {
        const res = await fetch(`${VITE_API_URL}/usuarios/registro`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, clave })
    });

    const result = await res.json();
    if( !res.ok){
        throw new Error( result.mensaje || "No se pudo registrar el usuario");
    }

    return result;
}
