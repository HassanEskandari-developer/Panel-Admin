import React from 'react'
import Image from 'next/image'
export default function Mony() {
  return (
    <>
    {/* ///////////////////1/////////// */}
    <div className='w-[80%] flex items-center bg-[#202838] gap-3 p-4 rounded-2xl'>
    <Image
        src='/Money Transfer.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-5 h-5'
      />

      <h2 className='text-[#a3aecc]'>Money Withdrawal</h2>
    </div>
    {/* ///////////////////2/////////// */}
    <div className='w-[80%] flex items-center bg-[#202838] gap-3 p-4 rounded-2xl'>
    <Image
        src='/Money Withdrawal.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-5 h-5'
      />

      <h2 className='text-[#a3aecc]'>Money Transfer</h2>
    </div>
    {/* ///////////////////3/////////// */}
    <div className='w-[80%] flex items-center bg-[#202838] gap-3 p-4 rounded-2xl'>
    <Image
        src='/Make Payment.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-5 h-5'
      />

      <h2 className='text-[#a3aecc]'>Make Payment</h2>
    </div>
    
    </>
  )
}
