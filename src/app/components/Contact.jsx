"use client"
import React from 'react'
import GithubIcon from 'public/images/githubIcon.svg'
import LinkedinIcon from 'public/images/linkedinIcon.svg'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
      <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id="contact">
          <div>
              <h5 className='teaxt-xl font-bold text-white my-2'>{`Let's Connect`}</h5>
              <p className='text-gray-500 mb-4 max-w-md'>
                  I will complete my M-Tech in 2024 May and I am actively looking
                  for new oppurtunities. Would love to connect if you need a enthusiastic
                  and skilled coder or if you just wanna say hi. I will get back to you
                  within one day.
              </p>
              <div className='socials flex flex-row gap-2'>
                  <Link href="https://github.com/armgp" target="_blank">
                      <Image src={GithubIcon} alt="Github Icon" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/abhiram-gp-9129b015b/" target="_blank">
                      <Image src={LinkedinIcon} alt="Github Icon" />
                  </Link>
              </div>
          </div>
          <div>
              <form className='flex flex-col' action="https://formsubmit.co/c8d544ebef9d048fa4823058bb096a31" method="POST">
                  <div className='mb-6'>
                    <label
                        htmlFor="email"
                        type="email"
                          className='text-white block text-sm font-medium mb-2'
                    >
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className='bg-gray-700 border-gray-100 placeholder-gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="milesmorales@avengers.com"
                    />
                  </div>
                  <div className='mb-6'>
                    <label
                        htmlFor="subject"
                          className='text-white block text-sm font-medium mb-2'
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        required
                        className='bg-gray-700 border-gray-100 placeholder-gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="I want to hire you!"
                    />
                  </div>
                  <div className='mb-6'>
                    <label
                        htmlFor="message"
                          className='text-white block text-sm font-medium mb-2'
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className='bg-gray-700 border-gray-100 placeholder-gray-500 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Hi Abhiram, Lets talk about..."
                    />
                  </div>
                  <button
                      type='submit'
                      className='text-white bg-blue-700 hover:bg-gradient-to-r hover:from-blue-700 hover:via-black-500 hover:to-green-800 font-medium py-2.5 px-5 rounded-lg w-full'
                  >
                      Send Message
                  </button>
              </form>
          </div>
          
    </section>
  )
}

export default Contact