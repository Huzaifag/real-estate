import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#project" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#testimonial" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full '>Signup</button>
        <img src={assets.menu_icon} onClick={()=> setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer' />
      </div>
      {/* --------Mobile Menu ---------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  top-0 bottom-0 right-0 overflow-hidden bg-white transition-all duration-500`}>
        <div className='flex justify-end p-5 cursor-pointer'>
          <img src={assets.cross_icon} onClick={()=> setShowMobileMenu(false)} className='w-6' />
        </div>
        <ul className='flex flex-col gap-2 items-center mt-5 px-5 text-lg font-medium'>
        <a href="#header" onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block hover:text-gray-400'>Home</a>
        <a href="#about" onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block hover:text-gray-400'>About</a>
        <a href="#project" onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block hover:text-gray-400'>Projects</a>
        <a href="#testimonial" onClick={()=> setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block hover:text-gray-400'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar