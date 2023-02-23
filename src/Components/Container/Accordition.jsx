import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion';

const Accordition = ({ id, title }) => {


  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {

    setActiveIndex(id === activeIndex ? null : id)

  }


  return (
    <div className='pb-8'>

      <div className='flex items-center justify-between'>

        <div className='sm:text-xl text-base font-bold'>
          {title}
        </div>
        <BsChevronDown className={`${id === activeIndex? "rotate-180" : ""} cursor-pointer transition-all duration-300`} onClick={() => handleClick(id)} />

      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div 
          initial={{height: 0}}
          animate={{height: 'auto'}}
          exit={{height: 0}}
          transition={{duration: 0.3}}
          style={{overflow: 'hidden'}}
          className="py-4"
          
          >

            <p className='text-sm leading-7 text-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quia, quis voluptatem provident aliquam ullam amet assumenda
              placeat? Veritatis voluptatem iste modi, eos dicta vero,
            </p>

          </motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}

export default Accordition