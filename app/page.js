import React from 'react';
import Image from 'next/image';
import Navigation from './component/navigation';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <h1>HELLO!</h1>
        <Image
          src='/goofy.png'// Assuming your image is inside the 'public' folder
          alt='logo'
          width={100}  // Set a width for the image
          height={100} // Set a height for the image
        />


      </main>
    </div>
  );
}
