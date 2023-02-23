import React from 'react';
import teacher1 from '../../assets/teacher1.png';
import teacher2 from '../../assets/teacher2.png';

import {accordions} from '../../Data'
import Accordition from './Accordition';


const Teacher = () => {
  return (
    <div className='section' id='teacher'>

      <div className="grid sm:grid-cols-2 place-items-center gap-8">

        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] ">
            Become <span className="text-Teal">An Instructor</span> <br /> of Our Platform
          </div>

          <p className="text-sm leading-7 text-gray mb-4 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit eius
            iste tempore voluptatem minus debitis pariatur sint itaque placeat ut iure quaerat
            laudantium alias quibusdam labore voluptates, eaque dolorum?
          </p>

          <button className="text-white font-bold text-sm py-3 px-4 bg-Teal rounded-lg 
          border border-solid border-gray">
            Start Teaching
          </button>

        </div>


        <div className='p-4 md:w-3/4 sm:row-start-1'>
          <img src={teacher1} alt="" />
        </div>


      </div>

      <div className="grid sm:grid-cols-2 place-items-center gap-8">


        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] ">
            Become <span className="text-Teal">An Instructor</span> <br /> of Our Platform
          </div>

          <p className="text-sm leading-7 text-gray mb-4 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit eius
            iste tempore voluptatem minus debitis pariatur sint itaque placeat ut iure quaerat
            laudantium alias quibusdam labore voluptates, eaque dolorum?
          </p>

          <button className="text-white font-bold text-sm py-3 px-4 bg-Teal rounded-lg 
  border border-solid border-gray">
            Get Started
          </button>

        </div>

        <div className='p-4 md:w-3/4'>
          <img src={teacher2} alt="" />
        </div>

      </div>

      <div className='text-[1.5rem] text-center font-bold my-8 sm:text-[1.875rem]'>
        Frequently <span>Asked Questions</span>
      </div>

      <div className='mt-10 max-w-[700px] mx-auto'>
        {accordions.map((a) => {

          return <Accordition key={a} {...a}/>

        })}
      </div>


    </div>
  )
}

export default Teacher