import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='min-h-screen w-full mb-4 bg-cover bg-center flex items-center overflow-hidden' style={{backgroundImage : "url('/header_img.png')"}} id='header'>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial animation properties
        transition={{ duration: 1.5 }} // Animation duration
        whileInView={{ opacity: 1, y: 0 }} // Animation properties when in view
        viewport={{ once: true }}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        <div className='space-x-6 pt-16'>
          <a href="#project" className='border border-white px-8 py-3 rounded hover:bg-gray-200 transition duration-300'>Projects</a>
          <a href="#contact-us" className='bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition duration-300'>Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header