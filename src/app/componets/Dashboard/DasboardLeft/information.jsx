"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useUserStore from '../../../store';

export default function Information() {
  const [isClient, setIsClient] = useState(false);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    setIsClient(true);  // Ensures component renders on the client side
  }, []);

  if (!isClient) {
    return null;  // Avoid rendering until the component has mounted
  }

  return (
    <div className='w-full flex flex-col justify-center items-center gap-2 py-3 lg:py-4'>
      <Image
        src='/proflogin.png'
        alt="Profile Picture"
        width={500}
        height={500}
        className='w-20 h-20 rounded'
      />
      {user ? (
        <>
          <h2 className='text-[#ecedf1] text-xl'>{user.name}</h2>
          <h2 className='text-[#0288cb]'>{user.email}</h2>
        </>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
}