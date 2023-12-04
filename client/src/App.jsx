import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profil from './pages/Profil'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a propos" element={<About />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Connexion" element={<Signin />} />
        <Route path="/Deconnexion" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  )
}
