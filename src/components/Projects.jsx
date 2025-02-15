import React, { useState, useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(()=>{
    const updateCardToShow = () => {
      if(window.innerWidth >= 1024){
        setCardToShow(projectsData.length);
    }else{
      setCardToShow(1);
    }
  }
  updateCardToShow();
  window.addEventListener('resize', updateCardToShow);

  return () => {
    window.removeEventListener('resize', updateCardToShow);
  }
},[]);
  

  const nextProject = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }
  const prevProject = () =>{
    setCurrentIndex((prevIndex) => prevIndex ===0 ? projectsData.length - 1 : prevIndex - 1);
  }
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='project'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto' >Crafting spaces,Bulding lagacies-Explore our portfolio</p>

      {/* slider buttons  */}
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject}>
          <img className='p-3 bg-gray-200 rounded mr-2' src={assets.left_arrow} alt="Perivious" aria-label='Perivious Project' />
        </button>
        <button onClick={nextProject}>
          <img className='p-3 bg-gray-200 rounded mr-2' src={assets.right_arrow} alt="Perivious" aria-label='Perivious Project' />
        </button>
      </div>

      {/* projects slide container  */}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform ease-in-out duration-500' style={{ transform: `translateX(-${(currentIndex * 100)/cardToShow}%)` }}>
          {projectsData.map((project, index)=>(
            <div key={index} className='relative flex-shrink-0 sm:w-1/4'>
              <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects