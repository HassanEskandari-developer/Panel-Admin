import React from 'react'
import Image from 'next/image'
export default function Lasttransactions() {
  return (
    <>
    <section className='w-[90%] bg-[#151b28]  h-auto lg:h-2/5 mx-5 lg:mx-10 rounded-3xl my-5'>
       <div className='w-full h-20 lg:h-16 bg-[#151b28] flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-y-2 lg:px-11'>
        <h2 className='text-[#ececf1] text-xl'>Last Transactions</h2>
        <button className='w-28 h-8 border border-[#596380] rounded-lg text-[#596380]'>All Time</button>
       </div>
       {/* ////////////////////// */}

       <div className='w-full flex flex-col justify-center items-center lg:py-5'>
        {/* ///////////////////1////////////// */}
       <div className='w-[90%] lg:h-1/4 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0  border-b border-[#596380] lg:items-center lg:justify-between p-5 lg:px-2'>
       <Image
        src='/Gift.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6'
      />
     
       <h3 className='text-[#596380]'>Shopping</h3>
       <h3 className='text-[#596380]'>Payment</h3>
       <h3 className='text-[#596380]'>20 February, 2021</h3>
       <h3 className='text-[#596380]'>10:25 AM</h3>
       <h3 className='text-[#596380]'>$50.99</h3>


       <Image
        src='/Dote.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-3 h-3'
      />
     
       
       </div>
        {/* ///////////////////2////////////// */}
       <div className='w-[90%] lg:h-1/4 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0  border-b border-[#596380] lg:items-center lg:justify-between p-5 lg:px-2'>
       <Image
        src='/Car.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6'
      />
     
       <h3 className='text-[#596380]'>Shopping</h3>
       <h3 className='text-[#596380]'>Payment</h3>
       <h3 className='text-[#596380]'>20 February, 2021</h3>
       <h3 className='text-[#596380]'>10:25 AM</h3>
       <h3 className='text-[#596380]'>$50.99</h3>


       <Image
        src='/Dote.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-3 h-3'
      />
     
       
       </div>
        {/* ///////////////////3////////////// */}
       <div className='w-[90%] lg:h-1/4 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0  border-b border-[#596380] lg:items-center lg:justify-between p-5 lg:px-2'>
       <Image
        src='/Groceries.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6'
      />
     
       <h3 className='text-[#596380]'>Shopping</h3>
       <h3 className='text-[#596380]'>Payment</h3>
       <h3 className='text-[#596380]'>20 February, 2021</h3>
       <h3 className='text-[#596380]'>10:25 AM</h3>
       <h3 className='text-[#596380]'>$50.99</h3>


       <Image
        src='/Dote.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-3 h-3'
      />
     
       
       </div>
        {/* ///////////////////4////////////// */}
       <div className='w-[90%] lg:h-1/4 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0  border-b border-[#596380] lg:items-center lg:justify-between p-5 lg:px-2'>
       <Image
        src='/Gim.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6'
      />
     
       <h3 className='text-[#596380]'>Shopping</h3>
       <h3 className='text-[#596380]'>Payment</h3>
       <h3 className='text-[#596380]'>20 February, 2021</h3>
       <h3 className='text-[#596380]'>10:25 AM</h3>
       <h3 className='text-[#596380]'>$50.99</h3>


       <Image
        src='/Dote.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-3 h-3'
      />
     
       
       </div>

       </div>
    </section>
    </>
  )
}
