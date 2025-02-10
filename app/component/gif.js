
import React from 'react';
import Image from 'next/image'; 

{/* This is the gif component that will be used on the home page */}
const Gif = () => {
  return (
    <div>
      <Image 
        src="/tails.gif" 
        alt="gif of tails emoting"
        width={1200}        
        height={1} 
      />
    </div>
  );
};

export default Gif;