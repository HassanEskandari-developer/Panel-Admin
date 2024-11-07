import React from 'react'
import Image from 'next/image'
import Cardchartarea from "./cardchrtarea"
import Cardchartpea from "./cardchartpea"
export default function Cartbank() {
  return (
    <>
    <section className='w-full  bg-[#0c0f17] flex flex-col items-center'>
        <div className='w-[90%] flex flex-col gap-y-10  p-5'>
            <div className='w-full flex flex-col lg:flex-row gap-10'>
                <div className='w-full lg:w-3/5 flex flex-col gap-10'>
                <div className='flex justify-between'>
                    <h2 className='text-[#ececf1] text-lg'>My Cards</h2>
                    <h2 className='text-[#ececf1] text-lg'>Add Card</h2>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-y-3 gap-x-5'>
                <Image
                     src='/My Cards.png'
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='w-80 h-60'
                    /> 
                <Image
                     src='/Add Card.png'
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='w-80 h-60'
                    /> 
                </div>
                
                </div>

                <div className='w-full lg:w-2/5 bg-[#151b28]  flex flex-col items-center rounded-3xl p-5 lg:p-0'>
                <div className='w-full lg:h-1/4 p-5 lg:p-0 lg:px-5'>
                <h2 className='text-[#ececf1] text-lg'>Current Balacne</h2>
                <span className='text-[#a3aecc] text-sm'>$340,500</span>
                </div>
                <div className='w-full lg:h-3/4 flex justify-center items-center'>
                <Image
                     src='/Current Balacne Image.png'
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      className='w-[90%] h-[80%]'
                    />
                </div>
                
                </div>
            </div>

            {/* ////////////////chart////////////////////////// */}

            <div className='w-full flex flex-col lg:flex-row  h-96'>
                <div className='w-full lg:w-2/3 bg-[#0c0f17] h-full flex justify-center'>
                
              <div className='w-[90%] h-full bg-red-300 rounded-3xl'>
              <Cardchartarea/>
              </div>

                </div>

                {/* /////////////// */}

                <div className='w-full lg:w-1/3 bg-[#151b28] flex flex-col  rounded-3xl items-center'>
               
                <Cardchartpea/>
                
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}
