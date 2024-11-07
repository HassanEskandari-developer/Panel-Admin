import React from 'react'
import Header from '../Header/header'
import Sidbar from '../Sidbar/sidbar'
import Walletcharts from './walletcharts'
import Paymenthistory from './paymenthistory'
export default function Page() {
  return (
    <>
    <section className='w-full flex '>

    <Sidbar className=""/>
    <div className="w-full">
    <Header/>
    <Walletcharts/>
    <Paymenthistory/>
    </div>
    

    </section>
    </>
  )
}
