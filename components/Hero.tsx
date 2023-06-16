import Link from 'next/link'
import React from 'react'
import {FaGalacticRepublic,FaRegHandshake} from "react-icons/fa"
import {GiBrain, GiLadder} from "react-icons/gi"
const Hero = () => {
  return (
    <div>
      {/* Landing page */}
    <div className="top-0 bg-[url('/bg.svg')]  h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center space-y-0">
      <div className="flex container mx-auto  w-[80%] items-center gap-6 p-4 ">
        {/* Left */}
        <div className=" gap-8 flex-col w-[38%]">
        <h1 className='text-4xl text-white py-2'>
          Second Generation, </h1>
          <h1 className='text-4xl text-white py-2'>
       A new Era Beckons.</h1>
          <div className="bg-white h-[4px] w-[15em] my-4"></div>
          <div className="py-8">
          <button className='px-4 py-2 text-md text-slate-950 bg-orange-500 rounded-lg cursor-pointer'>JOIN NOW</button>
         </div> </div>
        {/* Right */}
        <div className=" gap-5 p-4 flex-col w-[55%] justify-center items-center flex">
          <div className="h-[50vh] w-[49vw] bg-gray-400 rounded-[2.5rem]  "></div>
          </div>
      </div>
    </div>
     {/* Objective  */}
     <div className="mx-auto flex-col bg-slate-800 h-screen w-full">
      <div className="w-[80%] mx-auto flex-col justify-center items-center text-center ">
          {/* Title */}
          <div className="pt-[4rem]">
            <h2 className='text-white text-4xl pt-4'>An <span className='text-orange-400'>Objective</span> & <span className='text-orange-400' >Psychological</span> Approach</h2>
            <div className="flex justify-center items-center]">
            <div className="bg-slate-500 h-[1.5px] w-[27em] my-4 "></div>
            </div>
          </div>
          
        {/* Icons */}
        <div className="flex-col justify-center items-center space-y-[4rem] ">
  
          {/* first */}
          <div className="flex justify-center items-center gap-[6rem]">
            <div className="flex justify-center items-center p-4">
            <FaGalacticRepublic className='text-white text-6xl mr-5'/>
            <p className='text-white text-xl'>Second Generation, A new Era Beckons.</p>
            </div>
            <div className="flex justify-center items-center p-4">
            <GiLadder className='text-white text-6xl mr-5'/>
            <p className='text-white text-xl'>Second Generation, A new Era Beckons.</p>
            </div>
          </div>
           {/* first */}
           <div className="flex justify-center items-center gap-[6rem]">
            <div className="flex justify-center items-center p-4">
            <GiBrain className='text-white text-6xl mr-5'/>
            <p className='text-white text-xl'>Second Generation, A new Era Beckons.</p>
            </div>
            <div className="flex justify-center items-center p-4">
            <FaRegHandshake className='text-white text-6xl mr-5'/>
            <p className='text-white text-xl'>Second Generation, A new Era Beckons.</p>
            </div>
          </div>
  
      
        
         
        </div>

        {/* Click here */}
        <div className="pt-[4rem]">
           <Link href="/"> <p className='text-orange-400 text-2xl pt-4'>Click Here To Find Out More</p></Link>
          </div>
      </div>
     </div>
    </div>
  )
}

export default Hero