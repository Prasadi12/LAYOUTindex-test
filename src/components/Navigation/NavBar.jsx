import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./NavBar.css" 

export default function NavBar() {
  return (
    <div className="navBarBox">
        
        <div className="navBarLeft">
            <span className='logo'>LMS</span>
        </div>

        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search For your friend' className="searchInput" />
            </div>
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
