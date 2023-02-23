import React from 'react';
import about from "../../assets/About.jpg"

const About = () => {
  return (
    <div className='section' id='about'>

      <div className='grid md:grid-cols-2 gap-8 place-items-center'>

        <div className='border-[3px] border-solid border-Teal rounded-lg p-2'>
          <img src={about} alt="" />
        </div>

        <div>

          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            We provide the <br /> best <span className='text-Teal'>online course</span>

          </div>

          <p className='text-sm text-gray leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab amet vel
            unde dolores aliquid numquam! Iste veritatis, alias dicta voluptatem libero quos consectetur
          </p>

          <button className='border border-solid text-[1rem] font-bold rounded-lg p-2 mt-4'>Know more</button>


        </div>

      </div>

    </div>
  )
}

export default About