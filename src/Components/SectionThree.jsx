import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaArrowUpLong } from "react-icons/fa6";
import { TbLayoutSidebar } from "react-icons/tb";
import { LuAlignJustify } from "react-icons/lu";
import SectionOne from './SectionOne';


function SectionThree() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("menu open",isMenuOpen);

  return (
    <div>
      <nav className='flex justify-between h-12 border-b border-black/10 px-4 pt-3 '>
        <div className='flex gap-6 text-sm font-medium text-gray-500 px-2'>
          <div className='flex justify-center mb-1 lg:hidden md:hidden text-xl text-black'> <button onClick={() => setIsMenuOpen(!isMenuOpen)} href=""><LuAlignJustify /></button></div>
          <div className='pb-0.5 bg-gradient-to-r from-purple-600 to-gray-500'>
            <div className='bg-white pb-3'>
              <h5 className=' border-black bg-gradient-to-r from-purple-600 to-gray-500 text-transparent bg-clip-text rounded-2xl px-2' >AI Copilot</h5>
            </div>
            
          </div>
          <h5>Details</h5>
        </div>

        <div className='px-2'>
          <span className='text-base'><TbLayoutSidebar /></span>
        </div>
      </nav>

      <div className='flex flex-col relative h-screen bg-gradient-to-t from-[#ccccf0] via-[#f8eef2] to-transparent'>

        <div className={`absolute lg:hidden md:hidden top-0 left-0 w-11/12 h-4/5 bg-white z-10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <SectionOne/>
        </div>

        <div className='flex flex-col justify-center items-center h-[85%] w-full gap-3'>

          <img className='w-8 h-8 bg-white' src={Logo} alt="logo" />

          <div className='text-center'>
            <h3 className='font-semibold'>Hi, I'm Fin AI Copilot</h3>
            <p className='text-xs font-light'>Ask me anything about this conversation</p>
          </div>

        </div>

        <div className='flex flex-col justify-center w-full absolute lg:top-[82%] top-[78%] left-0 h-15 px-2'>

          <div className='flex justify-between h-10 p-2 px-4 bg-white rounded-lg' style={{boxShadow: "0 0 10px rgba(0,0,0,0.2)"}}>
            <form action="">
              <input type="text" placeholder='Ask a question' className='text-sm w-full h-full outline-none' />
            </form>

            <span className='p-1 text-gray-400 text-sm'>
               <FaArrowUpLong />
            </span>

          </div>
        </div>

      </div>
    </div>
  )
}

export default SectionThree
