import React from 'react'
import "./CoNavBar.css" 

export default function CoNavBar() {
  return (
    <div className="navBarBox">
        
        <div className="navBarLeft">
            <span className='logo'>LMS</span>
        </div>

        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">HomePage</span>
                <span className="navBarLink">Login</span>
            </div>
        </div>
    </div>
  )
}