import React from 'react'
import Image from 'next/image'; 

// This is the component for the BRRR gif

const Brr = () => {
  return (
    <div>
        <Image
        src="/brr.gif"
        alt="gif of tails freezing with the words BRRR at the top"
        width={500}        
        height={1} 
        />
    </div>
)}

export default Brr;
