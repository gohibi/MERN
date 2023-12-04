import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profil from './pages/Profil'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a propos" element={<About />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/connexion" element={<Signin />} />
        <Route path="/deconnexion" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  )
}
