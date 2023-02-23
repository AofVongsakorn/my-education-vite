import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='section' id='contact'>

      <div className='text-center max-w-[600px] mx-auto'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Subscribe <span className='text-Teal'>Newsletter</span> 
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Tenetur non ab nam odit sunt dignissimos quidem rem dolor molestiae cum
           veritatis deserunt facere enim debitis, itaque quam necessitatibus
        </p>

        <motion.form 
        
        initial={{scale: 0 }}
        whileInView={{scale: 1}}
        transition={{duration: 0.3}}

        className='mt-5'>
          <input type="text" 
          placeholder='Enter your E-mail'
          className=' text-sm sm:p-3 p-2 outline-none shadow-md sm:w-72 w-60 text-gray'/>
          <button className='text-sm text-white bg-Teal sm:p-3 p-2 shadow-md'>Subscribe</button>

        </motion.form>

      </div>


    </div>
  )
}

export default Contact