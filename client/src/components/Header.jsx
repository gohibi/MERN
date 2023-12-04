import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-gray-300 shadow-md'>
        <div className='flex justify-between items-center max-w-8xl mx-auto p-3'>
            <Link to="/">
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-red-400 uppercase'>zokou</span>
                <span className='text-red-700'>21</span>
            </h1>
            </Link>
          <ul className="flex gap-4">
           <Link to="/"> <li className='hidden sm:inline text-gray-950 text-lg hover:underline'>Accueil</li></Link>
           <Link to="/a propos">  <li className='hidden sm:inline text-gray-950 text-lg hover:underline'>A propos</li></Link>
           <Link to="/connexion">  <li className='hidden sm:inline text-gray-950 text-lg hover:underline'>Connexion</li> </Link>
                
        </ul>
        <form className='bg-slate-200 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Recherche...' className='bg-transparent text-lg focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-500'/>
        </form>
        </div>
    </header>
  )
}
