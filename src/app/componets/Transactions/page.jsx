import React from 'react'
import Sidbar from '../Sidbar/sidbar'
import Header from '../Header/header'
import Transactioncustomer from './transactioncustomer'
export default function Page() {
  return (
    <>
    <section className="w-full flex ">
    <Sidbar className=""/>
    <div className="w-full">
    <Header/>
    <Transactioncustomer/>
    </div>

    </section>
    
    
    </>
  )
}
