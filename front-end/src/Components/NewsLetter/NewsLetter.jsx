import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <h1>Exclusive offers on Email!!</h1>
      <p>Subscribe and stay updated</p>
      <div>
        <input type='email' placeholder='Email Id'/>
            <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
