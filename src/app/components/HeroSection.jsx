"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

const HeroSection = () => {
  return (
      <section>
          <div className='grid grid-cols-1 md:grid-cols-12'>
              <div className="col-span-7 place-self-center text-left">
                  <h1 className='text-white mb-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                      <div className='text-transparent bg-clip-text bg-gradient-to-r from-primary-700 via-black-500 to-secondary-800  hover:bg-secondary-800 mb-2'>
                          {`Hey, I'm`}{" "}
                      </div>
                      <TypeAnimation
                        sequence={[
                            'Abhiram.G.P',
                            2000, 
                            'Web Developer',
                            2000,
                            'M-Tech 2024',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                     />
                  </h1>
                  <p className='text-gray-500 mb-6 text-base sm:text-lg lg:text-xl'>
                      {`Welcome to my portfolio! I'm a software developer with a passion for innovation, currently enrolled in the M.Tech Computer Science program at`} <a className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-secondary-800  hover:bg-secondary-800' href='https://www.iiit.ac.in/' target="_blank">IIIT Hyderabad</a>{`, where I'm exploring the latest advancements in technology.`}
                  </p>
                  <div>
                      <button
                          className='px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br from-primary-700 via-black-500 to-secondary-800  hover:bg-gradient-to-r hover:from-primary-700 hover:via-black-500 hover:to-secondary-800 text-white mr-4'
                      >
                          <Link href="#contact">Hire Me</Link> 
                      </button>
                      <a href='docs/Abhiram_GP_2023.pdf' download='AbhiramGP.pdf'>
                      <button
                          className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-primary-700 via-black-500 to-secondary-800 text-white mt-3'
                      >
                          <span className='block bg-black rounded-full hover:bg-slate-800 px-5 py-2'>
                              Download CV
                          </span>
                          </button>
                          </a>
                  </div>
              </div>
              <div className='col-span-5 place-self-center'>
                  <Image
                      src="/images/coder.jpg"
                      alt="coder"
                      width={500}
                      height={500}
                  />
              </div>
          </div>
      </section>
  )
}

export default HeroSection