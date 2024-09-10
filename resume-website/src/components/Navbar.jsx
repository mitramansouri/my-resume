import React from 'react'
import logo from '../assets/my-logo.png' ;
import {FaLinkedin , FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-5 w-24" src={logo}/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <FaGithub />
          <FaLinkedin/>
        </div>
    </nav>
  )
}

export default Navbar

