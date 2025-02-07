import React from 'react';
import Image from 'next/image'; 

const Gif = () => {
  return (
    <div>
      <Image 
        src="/tails.gif" 
        alt="gif of tails emoting"
        width={1100}        
        height={1} 
      />
    </div>
  );
};

export default Gif;
