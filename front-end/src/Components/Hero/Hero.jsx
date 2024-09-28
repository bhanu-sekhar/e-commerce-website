import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import img from '../Assets/img.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New Arrivals</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>New</p>
                <img src={hand_icon} alt=""/>
            </div>
            <p>Collections</p>
            <p>for Everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow} alt='' />
        </div>
      </div>
      <div className='hero-right'>
        <img src={img} alt='' />
      </div>
    </div>
  )
}

export default Hero
