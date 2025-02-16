import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="logo" />
          <p className='mt-4 text-gray-400'>This is the footer section where you can find additional information and links.Explore our site for more insights and resources.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a 
              className='hover:text-white' href="#header">Home
            </a>
            <a 
              className='hover:text-white' href="#about">About Us
            </a>
            <a 
              className='hover:text-white' href="#contact-us">Contact Us
            </a>
            <a 
              className='hover:text-white' href="#">Privacy Policy
            </a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>Sign up for our newsletter to stay up to date with the latest news and offers.</p>
          <div className='flex gap-2'>
            <input
              className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto w-full'
              type="email" placeholder="Enter your email" />
              <button className='py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 transition duration-300 text-white'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copywrite 2023 &copy;. All rights reserved Huzaifa Gulzar.
      </div>
    </div>
  )
}

export default Footer