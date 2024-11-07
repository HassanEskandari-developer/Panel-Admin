import React from 'react'
import Image from 'next/image'
import Chartcircle from './chartcircle'
import Barchartwallet from './barchartwallet'
import Customers from './customers'
export default function Walletcharts() {
  return (
    <>
    <section className='w-full  bg-[#0c0f17] flex flex-col lg:flex-row'>
        {/* ///////////wallet Balance and using Static/////////////// */}
       <div className='w-full lg:w-2/3 h-full'>
       <div className='flex flex-col lg:h-1/3 lg:flex-row w-full lg:w-full  items-center gap-10 justify-center py-20'>
        <div className='w-[70%] lg:w-[40%] h-72 bg-[#151b28] rounded-3xl '>
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
        </div>

        <div className='w-[70%] lg:w-[40%] h-72 bg-[#151b28] rounded-3xl '>
            
        <div className='w-full h-1/4'>
        <h2 className='text-lg p-5 text-[#f9f9fa]'>Usage Statistics</h2>
        </div>

            <div className='h-3/4 w-full'>
            <Chartcircle/>
            </div>
        </div>

         
        </div>

        <div className='w-full lg:w-full h-96 bg-[#0c0f17] flex justify-center items-center'>
        <div className='w-[85%] h-full bg-[#151b28] rounded-3xl'>
        <Barchartwallet/>

        </div>
        
        </div>
       </div>

       <div className='w-full lg:w-1/3 h-[119vh] bg-[#0c0f17] flex justify-center items-end'>
       <div className='w-[85%] h-[107vh] bg-[#151b28] rounded-3xl'>
        <div className='h-1/6 w-full flex items-center'>
        <h2 className='text-[#f9f9fa] text-lg px-10'>
        Invoices List
        </h2>
        </div>

        {/* //////////////customer///////////////////// */}
        <Customers/>
       </div>
       
       </div>
    </section>
    
    </>
  )
}
