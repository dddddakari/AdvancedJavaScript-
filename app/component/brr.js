// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is the component for the temperature GIF

// All this will do is import the wanted gif while also giving me the ALT text and the width and height of the gif

import React from 'react'
import Image from 'next/image'; 

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
