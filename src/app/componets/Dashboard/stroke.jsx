'use client'

import React, { useEffect, useState } from 'react';
import Chartstroke from "../Dashboard/DasboardLeft/chartstroke"
import Chartstroke2 from "../Dashboard/DasboardLeft/chartstroke2" 
export default function Stroke() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);  // Ensures component renders on the client side
  }, []);

  if (!isClient) {
    return null;  // Avoid rendering until the component has mounted
  }
  return (
    <>
    <section className='w-[90%] bg-[#202838] h-[100vh] lg:h-1/5 mx-5 lg:mx-10 rounded-3xl flex flex-col lg:flex-row justify-center items-center'>
     <Chartstroke/>     
     <Chartstroke2/>
    </section>
    </>
  )
}
