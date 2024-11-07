import React from 'react'
import Image from "next/image";
import Login from "../../SinUp/page";
import Sidbar from '../Sidbar/sidbar';
import Header from "../Header/header";
import Dashboard from "../Dashboard/dashboard";
export default function Homedashboard() {
  return (
     <section className="w-full flex ">
    <Sidbar className=""/>
    <div className="w-full">
    <Header/>
    <Dashboard/>
    </div>

    </section> 
  )
}
