'use client'

import { useState, useEffect } from 'react'
import useSettingStore from "../../../headerstore"
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const setNamePage = useSettingStore((state) => state.setNamePage)


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-[#0c0f17] transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <svg 
              className="w-6 h-6 text-white hover:text-gray-300" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="">
          {/* محتوای سایدبار */}
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

        </div>
      </div>
    </>
  )
}