import React from 'react'
import Recharts from "./recharts"
import Image from 'next/image'
export default function Chart() {
  return (
    <>
    <section className='w-[90%] bg-[#151b28] h-[100vh] lg:h-2/5 mx-5 lg:mx-10 rounded-3xl flex justify-center items-center flex-col'>
    <div className='w-full h-20 bg-[#151b28] flex flex-col lg:flex-row justify-between items-center lg:px-10'>
     <div> 
      <h2 className='text-[#ececf1] text-xl'>Balance History</h2>
     </div>

      <div className='flex gap-5 py-5 lg:py-0'>
      {/* //// */}
        <div className=' flex gap-2 items-center '>
        <Image
        src='/logoIncome.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-4 h-4 '
      />
          <h3 className='text-[#596380] cursor-pointer'>Income</h3>
        </div>

      {/* ////// */}
      <div className='flex gap-2 items-center'>
      <Image
        src='/logoBalance.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-4 h-4 '
      />
        <h3 className='text-[#596380] cursor-pointer'>Balance</h3>
      </div>

      <h3 className='text-[#596380] cursor-pointer'>Monthly</h3>
      </div>
    </div>


      <Recharts />

    </section>
    
    </>
  )
}
