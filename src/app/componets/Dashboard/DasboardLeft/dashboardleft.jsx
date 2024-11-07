import React from 'react'
import Image from 'next/image'
import Information from './information'
import Current from './current'
import Mony from './mony'
export default function Dashboardleft() {
  return (
    <>
    <section className='w-[90%] p-5 lg:p-0 lg:h-[65rem] bg-[#151b28] mx-5 rounded-3xl flex flex-col items-center gap-y-9'>
    <Information/>
    <Current/>
    <div className='w-[80%]'>
      <h2 className='text-xl text-[#ecedf1]'>Quick Access</h2>
    </div>

    <Mony/>

    <div className='w-[80%]'>
      <h2 className='text-xl text-[#ecedf1]'>Quick Access</h2>
    </div>

    <Image
        src='/Card Image.png'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-[80%]'
      />
    </section>
    
    
    </>
  )
}
