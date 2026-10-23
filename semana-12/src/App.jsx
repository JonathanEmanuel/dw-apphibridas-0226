
import heroImg from './assets/hero.png'
import './App.css'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

function App() {



  return (
    <>
      <h1>Puntos del mapa</h1>
      <nav>
        <ul className='menu'>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/login">Ingresar</a>
          </li>
          <li>
            <a href="/register">Registrarme</a>
          </li>
        </ul>
      </nav>
      <Home />
     
    </>
  )
}

export default App
