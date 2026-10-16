import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [ puntos, setPuntos ] = useState([]); 
  const VITE_API_URL = import.meta.env.VITE_API_URL;

    useEffect(  () => {
      fetch(`${VITE_API_URL}/puntos`)
      .then( (response) => {
        if( !response.ok){
          throw new Error("Erro al obtener los puntos");
        }
        return response.json();
      })
      .then( (data) => {
        console.log(data);

        setPuntos( data.datos);
      } )
      .catch( (error) => { console.error(error)})
    }, [] )


  return (
    <>
      <h1>Puntos del mapa</h1>
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

export default App
