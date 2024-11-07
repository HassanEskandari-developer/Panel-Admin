import React from 'react'
import Image from 'next/image'

export default function LoginRight() {
  return (
    <>
    <section className='w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center'>
    
    <Image
        src='/work2.gif'
        alt="Picture of the author"
        width={500}
        height={500}
        className='w-4/5 h-3/5'
        
      />
    
    </section>
    
    </>
  )
}
