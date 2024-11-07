"use client"
import { useState, useEffect } from 'react'
import React from 'react'
import useSettingStore from '../../headerstore'
import Image from 'next/image'
import Sidebar from './sidebarmobile/sidebarmobile'

export default function Header() {
  const namePage = useSettingStore((state) => state.namePage);
  const [IsSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) {
    return null; // یا یک loading state نمایش دهید
  }
  return (
   <>
   <section className='w-full h-24 lg:h-40 bg-[#0c0f17] flex justify-between'>
   <div className='w-2/6 lg:w-4/6 h-full  flex justify-center lg:justify-start lg:px-16 items-center gap-3'>

   <svg className='w-5 h-7 text-white  lg:hidden'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" onClick={() => setIsSidebarOpen(true)}>
   <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
   </svg>
   <Sidebar isOpen={IsSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
   <h1 className='text-sm lg:text-2xl text-white'>{namePage}</h1>
    
   </div>

    <div className='w-4/6 lg:w-2/6 h-full  flex gap-3'>
    <div className='w-1/2 h-full  flex justify-center items-center relative'>
        <input type="text" className='w-20 h-6 lg:w-44 lg:h-8 bg-[#0c0f17] placeholder:p-8 placeholder:text-white placeholder:text-sm ' placeholder='Search' />
        <Image
        src='/Search Icon.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-4 h-4 absolute top-2/5 left-5'
      />
    </div>
    <div className='w-3/6 flex justify-center items-center  gap-3 lg:gap-5'>
        <Image
        src='/notif.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6 relative' 
      />
      <div className='w-5 h-5 flex justify-center items-center bg-red-300 rounded-full absolute top-6 right-20 lg:top-14 lg:right-32'>
        <span className='text-white text-sm'>3</span>
      </div>

        <Image
        src='/prof.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-8 lg:w-10 lg:h-10 h-8'
      />
        <Image
        src='/down.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-2 h-2'
      />
    </div>
    
    </div>

   </section>
   
   
   </>
  )
}
