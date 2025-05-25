import React, { useState } from 'react'
import { RiMessageFill } from "react-icons/ri";
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";
import { BsBookmarkDashFill } from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiMiniMoon } from "react-icons/hi2";
import { ImDownload } from "react-icons/im";




function SectionTwo() {
  const [input,setInput] = useState('')
  const [chats, setChats] = useState([])

  const handlesubmit = (e) =>{
    e.preventDefault()
    setChats(prev =>[...prev,input])
    setInput('')
  }
  return (
    <div>
      <nav className='flex justify-between h-12 border-b border-black/10'>

         <h3 className='font-semibold text-lg p-2'>Luis Easton</h3>

         <div className='flex items-center gap-4 px-5 text-lg'>
          <span className='p-1.5 rounded-lg bg-gray-300/40'><BsThreeDots /></span>
          <span className='p-1.5 rounded-lg bg-gray-300/40 '><HiMiniMoon /></span>
          <h5 className='p-2 rounded-lg flex items-center gap-1 text-sm bg-black text-white'><span className='text-lg'><ImDownload /></span>Close</h5>
          
        </div>

      </nav>

      <div className='flex relative flex-col gap-4 p-6 h-screen'>
        {/*Chats*/}
        <div>
          <div className='flex gap-2 h-auto p-2'>
            <div className='flex flex-col justify-end'>
              <h5 className=' flex justify-center items-center font-light bg-purple-600 h-6 w-6 rounded-full text-white'>L</h5>
            </div>
          
            <div className='p-3 w-[88%] rounded-lg bg-gray-300/40 text-sm'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam non, animi iste ullam dicta laborum, quisquam inventore quasi dolorum vero commodi recusandae voluptatibus odit ipsa.</p>
              <div className='flex gap-1.5 items-end h-[30%] text-[12px]'>
                <span className='mb-0.5'><RiMessageFill /></span>
                <p className='text-gray-500 font-medium'>1min</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-row-reverse gap-2'>

              <div className='flex justify-end items-end'>
                <h5 className=' flex justify-center items-center font-light bg-pink-400 h-6 w-6 rounded-full text-white'>K</h5>
              </div>
          
              <div className='p-2 text-sm w-auto h-auto rounded-lg bg-[#C0CEF9] '> 
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            {chats.length > 0 ? (chats.map((chat,index)=>(
              <div key={index} className='flex flex-row-reverse gap-2'>
                <div className='flex justify-end items-end'>
                  <h5 className=' flex justify-center items-center font-light bg-pink-400 h-6 w-6 rounded-full text-white'>K</h5>
                </div>
          
                <div className='p-2 text-sm w-auto h-auto rounded-lg bg-[#C0CEF9] '> 
                  <p>{chat}</p>
                </div>
              </div>
            ))
              ): null}
              
          </div>
          
        </div>

        {/*Chat Box*/}

        <div className='flex flex-col absolute top-[69%] w-11/12 h-35 rounded-lg bg-white mb-20 px-4 py-1.5' style={{boxShadow: "0 0 10px rgba(0,0,0,0.2)"}}>

        <div className='flex gap-1 items-start font-semibold text-sm'>
          <span className='mt-1'><BsChatLeftTextFill /></span>
          <p>Chat</p> 
          <span className='mt-1 px-1'><IoIosArrowDown /></span>
        </div>

        <form onSubmit={handlesubmit}>
          <input value={input} onChange={(e)=>setInput(e.target.value)} className='h-20 w-full outline-none' type="text" />
        </form>

        <div className='flex justify-between' >
          <div className='flex gap-1 cla'>
            <div className='mt-1'><BsLightningChargeFill /></div>
            <span>|</span>
            <div className='mt-1 px-1'><BsBookmarkDashFill /></div>
            <div className='mt-1 px-3'><MdEmojiEmotions /></div>
          </div>
          <div className='px-3 py-1'>
            <button type='submit' className='flex gap-1 text-gray-500 font-semibold text-sm'>Send<span className='mt-1 px-1'><IoIosArrowDown /></span></button>
          </div>
        </div>
          
        </div>
        

      </div> 
    </div>
  )
}

export default SectionTwo
