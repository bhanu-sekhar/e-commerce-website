import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is any site that facilitates the buying and selling of products and services. Digital marketplaces, online retail stores, and auction sites are considered ecommerce sites because they enable consumers to buy goods.</p>
        <p>E-commerce websites are designed to connect customers with products and services that can be traded over the internet1. They enable businesses to reach a global audience, streamline operations, and provide customers with convenient online shopping experiences</p>
      </div>
    </div>
  )
}

export default DescriptionBox
