import React from 'react'
import Stroke from "./stroke"
import Chart from './Chart/chart'
import Lasttransactions from './lasttransactions'
import Dashboardleft from './DasboardLeft/dashboardleft'
export default function Dashboard() {
  return (
    <>
    <section className='w-full  lg:h-[150vh] bg-[#0c0f17] flex flex-col lg:flex-row '>
       
       {/* ///////////////////////charts and existing//////////////// */}
      <div className='w-full lg:w-[70%]  h-2/3 lg:h-full flex flex-col gap-10'>
        <Stroke/>
        <Chart/>
        <Lasttransactions/>
      </div>

    {/* ///////////////////////////name and carts///////////////////// */}

    <div className='w-full lg:w-[30%] h-1/3 lg:h-full bg-[#0c0f17]'>
    <Dashboardleft/>
    
    </div>
    </section>
    
    
    
    </>
  )
}
