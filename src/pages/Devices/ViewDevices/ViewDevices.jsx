import React from 'react'
import DLeftPane from '../../../components/DLeftPane/DLeftPane'
import NavBar from '../../../components/Navigation/NavBar'
import ViewRightPane from '../../../components/ViewRightPane/ViewRightPane'
import './ViewDevices.css'

export default function ViewDevices() {
  return (
    <div>
        <NavBar/>
        <div className='bottomContainer'>
            <DLeftPane/>
            <ViewRightPane/>
        </div>
    </div>
  )
}
