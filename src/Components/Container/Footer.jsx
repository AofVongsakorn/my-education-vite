import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'

import { motion } from 'framer-motion'

const Footer = () => {

  return (

    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: 'auto' }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >

      <div className='grid md:grid-cols-4 sm:grid-cols-3 w-full 
    xs:grid-cols-2 grid-cols-1 gap-8 text-white'>

        <div className='w-[50%] flex justify-start flex-col'>
          <div className='font-bold mb-6'>Get Started</div>
          <p className='text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            In quo eaque sunt. Hic, delectus perferendis!</p>

        </div>

        <div className='w-[50%] flex justify-start flex-col'>
          <div className='font-bold mb-6'>Services</div>
          <div className='flex flex-col gap-4'>

            <a href="" className='text-sm text-white hover:underline'>Web Design</a>
            <a href="" className='text-sm text-white hover:underline'>Web Development</a>
            <a href="" className='text-sm text-white hover:underline'>Science</a>
            <a href="" className='text-sm text-white hover:underline'>Digital Marketing</a>
          </div>

        </div>

        <div className='w-[50%] flex justify-start flex-col'>
          <div className='font-bold mb-6'>Company</div>
          <div className='flex flex-col gap-4'>
            <a href="" className='text-sm text-white hover:underline'>Privacy</a>
            <a href="" className='text-sm text-white hover:underline'>SiteMap</a>
            <a href="" className='text-sm text-white hover:underline'>Careers</a>
            <a href="" className='text-sm text-white hover:underline'>Term & Conditions</a>
          </div>
        </div>

        <div className='w-[50%] flex flex-col justify-start'>

          <div className='font-bold  mb-6'>Follow us</div>
          <div className='text-sm mb-4'>
          DEVSKILLLearning@gmail.com

          </div>

          <div className='text-sm'>+999999999</div>

          <div className='flex gap-4 mt-4'>
            <a href="" className='hover:scale-125 text-xl'><BsFacebook/></a>
            <a href="" className='hover:scale-125 text-xl'><BsInstagram/></a>
            <a href="" className='hover:scale-125 text-xl'><BsTwitter /></a>
            <a href="" className='hover:scale-125 text-xl'><BsGithub /></a>
          </div>
        </div>



      </div>



    </motion.div>

  )
}

export default Footer