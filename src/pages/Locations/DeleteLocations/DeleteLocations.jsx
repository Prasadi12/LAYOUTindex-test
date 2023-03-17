import React from 'react'
import LeftPane from '../../../components/LeftPane/LeftPane'
import NavBar from '../../../components/Navigation/NavBar'
import ViewRightPane from '../../../components/ViewRightPane/ViewRightPane'
import './DeleteLocations.css'

export default function DeleteLocations() {
  return (
    <div>
        <NavBar/>
    <div className='bottomContainer'>
        <LeftPane/>
        <ViewRightPane/> 
    </div>
    </div>
  )
}
