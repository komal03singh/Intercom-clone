import { LuChevronDown } from "react-icons/lu";
import { LuTicketMinus } from "react-icons/lu";
import { LuCornerUpLeft } from "react-icons/lu";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { RiSidebarFoldFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";






function SectionOne() {
  return (
    <div>
      <nav className='h-12 border-b border-black/10'>
        <h3 className='font-semibold text-lg p-2'>Your inbox</h3>
      </nav>

      <div className='text-xs flex justify-between items-baseline pt-4 px-3 font-bold '>
        <p className='flex items-center gap-0.5'>5 Open <LuChevronDown  /></p>
        <p className='flex items-center gap-0.5'>Waiting longest <LuChevronDown /></p>
      </div>
      
      <main className='flex flex-col relative w-full h-screen p-2'>

        <ul className='flex flex-col gap-1'>

          <a href="">
            <li className='flex items-center justify-center text-xs bg-[#C0CEF9]/30 rounded-2xl h-16 '>
              <div className='flex justify-center items-center bg-purple-600 text-white rounded-full w-8 h-8'>
                <p>L</p>
              </div>
 
              <div className='flex flex-col gap-0.5 w-2/3 p-2 text-gray-500'>
                <h3 className='font-semibold'>Luis-Github</h3>
                <p className='truncate overflow-hidden text-nowrap text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, minus?</p>
              </div>
              <div className='flex items-end h-8 text text-gray-500 px-1'>
                <p>45m</p>
              </div>
            </li>
          </a>

          <a href="">
            <li className='flex items-center justify-center text-xs h-16 hover:bg-[#C0CEF9]/30 rounded-2xl font-bold'>
              <div className='flex justify-center items-center bg-pink-700 text-white rounded-full w-8 h-8'>
                <p className='font-light'>I</p>
              </div>

              <div className='flex flex-col gap-0.5 w-[60%] p-2'>
                <h3>Ivan-Nike</h3>
                <p className='truncate overflow-hidden text-nowrap text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, minus?</p>
              </div>
              <div className='flex flex-col items-end justify-end h-8 text text-black px-2'>
                <div className='flex items-center justify-center bg-[#EFEB5C]/80 p-1 rounded-xl text-[10px] mb-0.5'>
                <BiSolidPieChartAlt /><span className='font-semibold'>3min</span>
                </div>
                <p className='text-gray-500 font-medium'>30m</p>
              </div>
            </li>
          </a>

          <a href="">
            <li className='flex items-center justify-center text-xs h-16 hover:bg-[#C0CEF9]/30 rounded-2xl'>
              <div className='flex justify-center items-center bg-purple-600 text-white rounded-full w-8 h-8'>
                <p>L</p>
              </div>

              <div className='flex flex-col gap-0.5 w-2/3 p-2 font-bold'>
                <h3>Lead from New York</h3>
                <p className='truncate overflow-hidden text-nowrap text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, minus?</p>
              </div>
              <div className='flex flex-col justify-between items-end h-10 text text-gray-500 px-1.5 font-medium'>
                <h5 className='flex items-center justify-center w-5 h-5 text-[10px] rounded-full border-1 bg-black text-white '>1</h5>
                <p>40m</p>
              </div>
            </li>
          </a>

          <a href="">
            <li className='flex items-center justify-center text-xs h-16 hover:bg-[#C0CEF9]/30 rounded-2xl'>
              <div className='flex justify-center items-center bg-black text-white rounded-full w-8 h-8'>
                <p><LuTicketMinus className='w-5 h-5' /></p>
              </div>

              <div className='flex flex-col gap-0.5 w-2/3 p-2'>
                <h3 className='text-nowrap'>Booking API problems</h3>
                <p className='truncate overflow-hidden text-nowrap text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, minus?</p>
              </div>
              <div className='flex items-end h-8 text text-gray-500 px-2'>
                <p>45m</p>
              </div>
          </li>

          </a>

          <a href="">
            <li className='flex items-center justify-center text-xs h-16 hover:bg-[#C0CEF9]/30 rounded-2xl'>
              <div className='flex justify-center items-center bg-gray-200 text-black text-lg rounded-full w-8 h-8'>
                <p ><LuCornerUpLeft /></p>
              </div>

              <div className='flex flex-col gap-0.5 w-2/3 p-2 text-gray-500'>
                <h3 className='font-semibold text-nowrap'>Miracle-Exemplary Bank</h3>
                <p className='truncate overflow-hidden text-nowrap text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, minus?</p>
              </div>
              <div className='flex items-end h-8 text text-gray-500 px-2 font-medium'>
                <p>45m</p>
              </div>
            </li>
          </a>

        </ul>

        <div className='flex justify-center absolute top-[80%] left-3 rounded-lg h-8 w-15' style={{boxShadow: "0 0 10px rgba(0,0,0,0.2)"}}>
          <span className="bg-gray-300 p-1 m-1 flex items-center rounded-lg"><RiSidebarFoldFill /></span>
          <span className="p-1 flex items-center text-lg"><IoMenu /></span>
        </div>

      </main>
    </div>
  )
}

export default SectionOne
