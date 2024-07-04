import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <diV>
        <input type='email' placeholder = 'Your Email Id'/>
        <button>Subscribe</button>
      </diV>
    </div>
  )
}

export default NewsLetter
