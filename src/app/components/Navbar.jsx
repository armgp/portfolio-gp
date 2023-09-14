"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    // {
    //     title: "Projects",
    //     path: "#projects",
    // },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-100 mb-10'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link href={"/"} className='text-xl md:text-2xl text-gray-500 font-semibold border border-2 rounded-full border-gray-500 p-2'>
                GP
            </Link>
            <div className='mobile-menu block md:hidden'>
                  {
                      navbarOpen ? (
                          <button onClick={() => setNavbarOpen(false)} className='flex itesm-center px-3 py-2 text-slate-200 hover:text-white'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z" clip-rule="evenodd" />
                              </svg>
                          </button>
                      ) :
                      (
                          <button onClick={() => setNavbarOpen(true)} className='flex itesm-center px-3 py-2 text-slate-200 hover:text-white'>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                  </svg>
                          </button>
                      )
                  }
            </div>
            <div className='menu hidden md:block md:w-auto pr-10' id='navbar'>
                  <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8'>
                      {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                      ))}
                  </ul>
            </div>
          </div>  
          {navbarOpen && <div className='md:hidden'><MenuOverlay navLinks={navLinks}/></div>}
    </nav>
  )
}

export default Navbar