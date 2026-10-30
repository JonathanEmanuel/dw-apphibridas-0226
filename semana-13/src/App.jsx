import { Routes, Route, Link } from 'react-router-dom'
import heroImg from './assets/hero.png'
import './App.css'

import Nav from './components/Nav'
import Header from './components/Header'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './views/NotFound'

function App() {



  return (
    <>
     
      <Nav />
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/registro' element={ <Register />} />
        <Route path='*' element={ <NotFound />} />

      </Routes>
     
    </>
  )
}

export default App
