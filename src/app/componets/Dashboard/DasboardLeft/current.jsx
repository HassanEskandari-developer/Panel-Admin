import React from 'react'
import Image from 'next/image'
export default function Current() {
  return (
    <>
    <section className='w-[80%] h-72 lg:h-48 bg-[#202838] rounded-3xl'>
    <div className='w-full h-1/2 flex flex-col justify-center items-center border-b border-[#a3aecc]'>
    <h2 className='text-[#a3aecc]'>Current Balance</h2>
    <span className='text-lg text-[#ecedf1]'>$340,500</span>
    </div>

    {/* ////////////////////// */}
    <div className='w-full h-1/2 flex flex-col lg:flex-row  items-center  gap-y-3 '>
    
    <div className='w-1/2  flex flex-col justify-center items-center'>
    <h3 className='text-[#a3aecc]'>Incom</h3>
    <div className='flex gap-2 justify-center items-center'>
    <Image
        src='/Top Arrow.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-5 h-5'
      />
      
      <span className='text-lg text-[#f9f9fa]'>$35,450</span>
     
    </div>
    </div>
    {/* ///////////////////////////////////////////////////////////////////////////////////// */}
    <div className='w-1/2 flex flex-col justify-center items-center '>
    <h3 className='text-[#a3aecc]'>Incom</h3>
    <div className='flex gap-2 justify-center items-center'>
    <Image
        src='/Top Arrow.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-5 h-5'
      />
      
      <span className='text-lg text-[#f9f9fa]'>$35,450</span>
     
    </div>
    
    </div>
    </div>
    </section>
    
    </>
  )
}
