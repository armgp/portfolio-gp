import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-gray-800 border-b-transparent border-l-transparent border-r-transparent text-gray-300'>
          <div className='p-10 flex justify-between'>
              <span>
                  <Link href={"/"} className='text-xl md:text-2xl font-semibold border border-2 rounded-full text-gray-700 border-gray-700 p-2'>
                      GP
                  </Link>
              </span>
              <p className='text-gray-700'> All rights reserved.</p>
          </div>   
    </footer>
  )
}

export default Footer