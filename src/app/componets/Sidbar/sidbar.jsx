"use client"
import React from 'react'
import useSettingStore from '../../headerstore'
import Image from 'next/image'
import Link from 'next/link'
export default function sidbar() {
  const setNamePage = useSettingStore((state) => state.setNamePage)
  return (
    <>
    
    <section className='hidden lg:block lg:w-1/5  bg-[#0c0f17] '>
     <div className='w-full  flex items-center p-16 '>
     
     <Image
        src='/logo.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-[80%] lg:w-full'
      />
     
     </div>

     {/* /////////////////////ul////////////////////// */}

     <div className='w-full  flex flex-col py-20 items-center '>
     
     <ul className='flex flex-col gap-5 justify-center items-center w-full'>
       <div className='flex justify-center items-center gap-3  w-full'>
       <Image
        src='/Dashboard.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12 '
      />
       <li className='text-[#596380] text-sm lg:text-lg'>
        <Link href="/componets/homedashboard" onClick={() => setNamePage('Dashboard')}>Dashboard</Link>
       </li>
       </div>

       <div className='flex justify-center items-center gap-4  w-full'>
       <Image
        src='/My Wallet.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12'
      />
       <li className='text-[#596380] text-sm lg:text-lg'>
         
         <Link href="/componets/Wallet" className='cursor-pointer' onClick={() => setNamePage('My Wallet')}>My Wallet</Link>
         </li>
       </div>

        <div className='w-full flex justify-center items-center gap-3'>
        <Image
        src='/Transactions.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12'
      />
        <li className='text-[#596380] text-sm lg:text-lg'>
          <Link href='/componets/Transactions' onClick={() => setNamePage('Transactions')}>Transactions</Link>
        </li>
        </div>
        
       <div className='w-full flex justify-center items-center gap-3 '>
       <Image
        src='/Card Center.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12'
      />
       <li className='text-[#596380] text-sm lg:text-lg'>
        <Link href="/componets/Cardcenter" onClick={() => setNamePage('Card Center')}>Card Center</Link>
       </li>
       </div>

        <div className='w-full flex justify-center items-center gap-3'>
        <Image
        src='/Accounts.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12'
      />
        <li className='text-[#596380] text-sm lg:text-lg'>Accounts</li>
        </div>

        <div  className='w-full flex justify-center items-center gap-3'>
        <Image
        src='/Setting.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12'
      />
        <li className='text-[#596380] text-sm lg:text-lg'>Setting</li>
        </div>


        <div className='w-full flex justify-center items-center gap-3'>
        <Image
        src='/Utilities.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12'
      />
        <li className='text-[#596380] text-sm lg:text-lg'>Utilities</li>
        </div>

        <div className='w-full flex justify-center items-center gap-3'>
        <Image
        src='/Authentication.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12'
      />
        <li className='text-[#596380] text-sm lg:text-lg'>Authentication</li>
        </div>

        <div className='w-full flex justify-center items-center gap-3'>
        <Image
        src='/Dashboard.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-1/12'
      />
        <li className='text-[#596380] text-sm lg:text-lg'>Invoices</li>
        </div>
     </ul>
     
     
     
     </div>
    
    
    
    </section>
    
    
    
    
    </>
  )
}
