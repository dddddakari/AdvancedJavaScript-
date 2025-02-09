// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is the component for the weight GIF


// This is the component for the jogging gif

import React from 'react'
import Image from 'next/image'; 

const Jogging = () => {
  return (
    <div>
      <Image
        src="/Jogging.gif"
        alt="gif of tails freezing with the words BRRR at the top"
        width={475}        
        height={1} 
        />
    </div>
  )
}

export default Jogging
