import React, { useEffect, useState } from 'react';
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi"
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';



const Navbar = () => {

  const [toggle, SetToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {

    const scrollAtive = () => {
      setActive(window.scrollY > 20);
    }

    window.addEventListener('scroll', scrollAtive);

    return () => window.removeEventListener('scroll', scrollAtive)

  }, [active]);



  return (
    <div className={`${active ? "shadow-lg bg-Solitude" : ""} 
    fixed w-full top-0 left-0 z-20` }>

      <div>

        <div className={`${active ? 'py-2 transition-all duration-300' : 'py-4'} container mx-auto flex items-center justify-between px-2` }>

          <div className='flex items-center gap-4'>
            <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer'
              onClick={() => SetToggle(true)} />
            <div className='text-xl text-Teal uppercase tracking-wide font-bold'>Devskill</div>
          </div>


          <div className='sm:flex items-center hidden'>
            {navLinks.map((nav) => {
              return <NavLinks key={nav.id} {...nav} />

            })}
          </div>


          <button className='py-3 px-6 font-bold text-sm border border-solid 
          rounded-lg border-gray'>
            Sign Up
          </button>


          {toggle && (
            <motion.div 
            initial={{x:-500, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.3}}
            
            className='fixed h-full w-96 top-0 left-0 z-20 bg-Teal 
              text-white flex flex-col justify-center items-center 
              shadow-lg gap-8 py-8'>

              {navLinks.map((nav) => {
                return <MobileNav
                  key={nav.id}
                  {...nav}
                  SetToggle={SetToggle} />
              })}
              <HiX className='absolute top-10 right-12 text-2xl cursor-pointer'
                onClick={(prev) => SetToggle(!prev)} />


            </motion.div>
          )}


        </div>

      </div>

    </div>
  )
}

export default Navbar