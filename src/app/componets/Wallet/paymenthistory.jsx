import React from 'react'
import Image from 'next/image'
export default function Paymenthistory() {
  return (
    <>
    <section className='w-full bg-[#0c0f17] flex justify-center items-center'>
    <section className='w-[95%] bg-[#151b28]  lg:h-2/5 mx-5 lg:mx-10 rounded-3xl my-5'>
       <div className='w-full h-20 lg:h-16 bg-[#151b28] flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-y-2 lg:px-11'>
        <h2 className='text-[#ececf1] text-xl'>Payment History</h2>
        <button className='w-28 h-8 border border-[#596380] rounded-lg text-[#596380]'>This Week</button>
       </div>
       {/* ////////////////////// */}

       <div className='w-full flex flex-col justify-center items-center lg:py-5'>
        {/* ///////////////////1////////////// */}
       <div className='w-[90%] lg:h-1/4 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0  border-b border-[#596380] lg:items-center lg:justify-between p-5 lg:px-2'>
       <Image
        src='/Payment History Table 1.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6'
      />
     
       <h3 className='text-[#596380]'>Flaming</h3>
       <h3 className='text-[#596380]'>Mastercard</h3>
       <h3 className='text-[#596380]'>20 February, 2021</h3>
       <h3 className='text-[#596380]'>+$1,250</h3>
       {/* <h3 className='text-[#596380]'>$50.99</h3> */}
       <button className='w-32 h-8 border border-[#67d916] text-[#67d916] rounded-lg'>Completed</button>


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
        src='/Payment History Table2.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6'
      />
     
       <h3 className='text-[#596380]'>Harold</h3>
       <h3 className='text-[#596380]'>Paypal</h3>
       <h3 className='text-[#596380]'>20 February, 2021</h3>
       <h3 className='text-[#596380]'>-$3,500</h3>
       {/* <h3 className='text-[#596380]'>$50.99</h3> */}
       <button className='w-32 h-8 border border-[#f63] text-[#f63] rounded-lg'>Canceled</button>


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
        src='/Payment History Table3.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6'
      />
     
       <h3 className='text-[#596380]'>Samuel</h3>
       <h3 className='text-[#596380]'>Paypal</h3>
       <h3 className='text-[#596380]'>20 February, 2021</h3>
       <h3 className='text-[#596380]'>+$800</h3>
       {/* <h3 className='text-[#596380]'>$50.99</h3> */}
       <button className='w-32 h-8 border border-[#f2c200] text-[#f2c200] rounded-lg'>Pending</button>


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
        src='/Payment History Table4.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-6 h-6'
      />
     
       <h3 className='text-[#596380]'>Shopping</h3>
       <h3 className='text-[#596380]'>Payment</h3>
       <h3 className='text-[#596380]'>20 February, 2021</h3>
       <h3 className='text-[#596380]'>10:25 AM</h3>
       {/* <h3 className='text-[#596380]'>$50.99</h3> */}
       <button className='w-32 h-8 border border-[#67d916] text-[#67d916] rounded-lg'>Completed</button>


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
    </section>
    
    
    </>
  )
}
