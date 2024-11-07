import React from 'react'
import Image from 'next/image'
export default function Transactioncustomer() {
  return (
    <>
    <section className='w-full  bg-[#0c0f17] flex justify-center py-10'>
        <div className='w-[93%] h-full rounded-3xl bg-[#151b28] flex- flex-col'>


        <div className='w-full  lg:h-28 flex flex-col lg:flex-row items-center lg:justify-between p-5 lg:px-10 '>
            <div>
                <h2 className='text-[#ececf1] text-lg'>Transactions History</h2>
                <span className='text-[#596380] text-sm'>Lorem ipsum dolor sit amet</span>
            </div>
            <div>
                <button className='w-32 h-10 text-lg text-[#596380] border border-[#596380] rounded-xl '>This Week</button>
            </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////// */}

        <div className='w-full  flex flex-col  items-center'>
            <div className='w-[95%] p-10 gap-x-[115px] flex flex-col lg:flex-row  border-b border-[#a3aecc] gap-y-3 lg:gap-y-0'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#a3aecc]'>Transaction ID</h2>
                </div>
            
            <div><h2 className='text-[#a3aecc]'>Recipient</h2></div>
            <div><h2 className='text-[#a3aecc]'>Date</h2></div>
            <div><h2 className='text-[#a3aecc]'>Amount</h2></div>
            <div><h2 className='text-[#a3aecc]'>Card Name</h2></div>
            <div><h2 className='text-[#a3aecc]'>Status</h2></div>
            </div>
            {/* ////////////////////////////ID1////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#a3aecc] gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image1.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
            <button className='w-32 h-8 border border-[#f2c200] text-[#f2c200] rounded-lg'>Pending</button>

            <Image
                 src='/Dote.png'
                 alt="Picture of the author"
                 width={500}
                 height={500}
                 className='w-3 h-3'
                />
                </div>
                
            </div>
            {/* ////////////////////////////ID2////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#a3aecc] gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image2.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
            <button className='w-32 h-8 border border-[#f2c200] text-[#f2c200] rounded-lg'>Pending</button>

            <Image
                 src='/Dote.png'
                 alt="Picture of the author"
                 width={500}
                 height={500}
                 className='w-3 h-3'
                />
                </div>
                
            </div>
            {/* ////////////////////////////ID3////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#a3aecc] gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image3.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
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
            {/* ////////////////////////////ID4////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#a3aecc] gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image4.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
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
            {/* ////////////////////////////ID5////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#a3aecc] gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image5.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
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
            {/* ////////////////////////////ID6////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#a3aecc] gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image6.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
            <button className='w-32 h-8 border border-[#f63] text-[#f63] rounded-lg'>Canceled</button>

            <Image
                 src='/Dote.png'
                 alt="Picture of the author"
                 width={500}
                 height={500}
                 className='w-3 h-3'
                />
                </div>
                
            </div>
            {/* ////////////////////////////ID7////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#a3aecc] gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image7.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
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
            {/* ////////////////////////////ID8////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center border-b border-[#a3aecc] gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image9.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
            <button className='w-32 h-8 border border-[#f63] text-[#f63] rounded-lg'>Canceled</button>

            <Image
                 src='/Dote.png'
                 alt="Picture of the author"
                 width={500}
                 height={500}
                 className='w-3 h-3'
                />
                </div>
                
            </div>
            {/* ////////////////////////////ID9////////////////////////// */}
            <div className='w-[95%] p-10  flex flex-col lg:flex-row justify-between lg:items-center  gap-y-4'>
            <div className='flex gap-x-5'>
                <input type="checkbox" name='Transaction ID' />
                <h2 className='text-[#596380]'>596380</h2>
                </div>
            
            <div className='flex gap-x-10 items-center'>
            <Image
               src='/Transactions Image4.png'
               alt="Picture of the author"
               width={500}
               height={500}
               className='w-10 h-10 '
             />
                <h2 className='text-[#a3aecc]'>Recipient</h2>
                </div>



            <div><h2 className='text-[#596380]'>February 19, 2021, 10:50 AM</h2></div>
            <div><h2 className='text-[#596380]'>$590</h2></div>
            <div><h2 className='text-[#596380]'>Mastercard</h2></div>


            <div className='flex flex-col lg:flex-row gap-3 lg:items-center'>
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
            

        </div>

        </div>
    </section>
    
    </>
  )
}
