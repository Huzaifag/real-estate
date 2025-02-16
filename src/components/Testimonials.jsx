import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Initial animation properties
      transition={{ duration: 1 }} // Animation duration
      whileInView={{ opacity: 1, x: 0 }} // Animation properties when in view
      viewport={{ once: true }} // Run the animation only once
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonial'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Real Stories from Those who Found Home with Us</p>
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index)=>(
          <div key={index} className='max-w-[300px] border shadow-lg rounded px-8 py-12 text-center'>
            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
            <h2 className='text-xl font-medium text-gray-700'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className='flex justify-center mb-4 text-red-400'>
              {Array.from({length: testimonial.rating}, (_, index) => (
                <img key={index} src={assets.star_icon} alt="star" />
              ))}
            </div>
            <p className='text-gray-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials