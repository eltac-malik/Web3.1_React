import React from 'react'
import {Link,Outlet} from 'react-router-dom'

import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className='tab'>
      <p><Link to='phone'>Phone</Link></p>
      <p><Link to='mail'>Mail</Link></p>
      </div>

      <Outlet/>
    </div>
  )
}
