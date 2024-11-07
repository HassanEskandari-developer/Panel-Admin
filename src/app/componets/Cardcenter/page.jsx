import React from 'react'
import Sidbar from '../Sidbar/sidbar'
import Header from '../Header/header'
import Cartbank from './cartbank'
import Cadrlist from './cadrlist'
export default function Page() {
  return (
    <>
    <section className="w-full flex ">
    <Sidbar className=""/>
    <div className="w-full">
    <Header/>
    <Cartbank/>
    {/* <Cadrlist/> */}

    
    </div>

    </section>
    
    </>
  )
}
