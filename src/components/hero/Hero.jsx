import React from 'react'
import "./hero.scss"

export const Hero = ({videoImg}) => {
  return (
    <div className='hero__container'>
      <img 
      className='hero__img'
      src={videoImg.image} 
      alt={videoImg.title}
       />
    </div>
  )
}
