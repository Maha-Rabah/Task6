import React from 'react'
import './HeroStyle.css'
import Image from 'next/image';

const Hero = ({homepic,title,desc,button}) => {
  return (
    <div className='Hero'>
      <Image src={homepic} alt="not found" />
      <div className="overlay"></div>
       <div className="Hero-text">
         <h1>{title}</h1>
         <p>{desc}</p>
         <button>{button}</button>
       </div>
    </div>
  
  )
}

export default Hero