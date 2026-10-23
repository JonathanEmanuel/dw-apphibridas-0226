import { useState, useEffect } from 'react'
import { obtenerPuntos } from '../service/api.js';

const Home = () => {

    const [ puntos, setPuntos ] = useState([]); 

    useEffect(  () => {

      async function getPuntos(){
        const result = await obtenerPuntos();
        console.log( result);
        setPuntos( result.datos)
      }

      getPuntos();

    }, [] )

    return(
        <>
            <h1>Home</h1>
            <div className="container">

                {
                puntos.map( punto =>  
                            <div className="card" key={punto._id}>
                                <h4>{ punto.titulo }</h4>
                                <ul>
                                <li>{  punto.latitud  }</li>
                                <li>{  punto.longitud  }</li>

                                </ul>
                            </div> )
                }
            </div>
        </>
    )
}

export default Home