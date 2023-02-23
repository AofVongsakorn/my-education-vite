import React from 'react';
import hero from '../../assets/hero.png';
import { logos } from '../../Data';
import { motion } from 'framer-motion';

const Home = () => {

  const container = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }
    }

  }

  const item = {
    hidden: { y: 20, opacity: 0},
    visible: {y:0, opacity:1}
  }

  return (

    <div className='section' id='home'>

      <div className='md:flex items-center justify-center'>

        <div>

          <div className='font-bold text-xs text-Teal mb-4'>
            {" "} your e-learning partner
          </div>

          <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
            This is <br /> the new way <br /> to learn online
          </div>

          <p className='text-sm leading-7 text-gray max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            cumque excepturi! Perspiciatis asperiores consectetur necessitatibus.
          </p>

          <div className='mt-6'>
            <button className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mt-4
            border border-gray border-solid mr-4 text-sm'>Get Started</button>
            <button className='px-6 py-3 font-bold rounded-lg mt-4
            border border-gray border-solid text-sm'>Discover</button>

          </div>

        </div>

        <div className='md:w-[60%]'>
          <img src={hero} />
        </div>



      </div>

      <p className='text-center text-xl'>We collaborate with{" "}
        <span className='text-Teal'>100+ leading universities ans companies</span>
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"

        className='flex items-center justify-center flex-wrap gap-8 py-2'>
        {logos.map((l, index) => {
          return (
            <motion.div 
            variants={item}
            whileHover={{scale:1.1}}
            className='w-28' key={index}>
              <img src={l} alt="" className='w-full object-cover' />
            </motion.div>
          )
        })}
      </motion.div>

    </div>
  )
}

export default Home