import { NavLink } from "react-router-dom"

function  Nav(){

    return(
    <nav>
        <ul className='menu'>
          <li>
            <NavLink to='/'> Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Ingresar</NavLink>
          </li>
          <li>
            <NavLink to='/registro'>Registrarme</NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default Nav