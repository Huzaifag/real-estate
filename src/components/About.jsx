import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center container mx-auto p-14 mb:px-20 lg:px-32 w-full overflow-hidden' id='about'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about properties, Dedicate to your vision</p>
      <div className='flex flex-col md:flex-row md:gap-20 items-center md:items-start'>
        <img src={assets.brand_img} className='w-full md:w-1/2 max-w-lg' alt="" />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-20">
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Proects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>ongoing Projects</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>We are a team of experienced property developers who have been working in the industry for over 10 years. We have completed over 12 projects and have delivered over 20 million square feet of prime real estate. We are currently working on over 25 ongoing projects and have an impressive track record of delivering quality projects on time. Our expertise lies in understanding the needs of our clients and delivering projects that meet their expectations.</p>
          <button className='bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition duration-300'>Learn More</button>
        </div>
      </div>

    </div>
  )
}

export default About