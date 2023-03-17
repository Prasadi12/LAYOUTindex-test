import React from 'react'
import CoNavBar from '../../../components/CommonNavBar/CoNavBar'
import DLeftPane from '../../../components/DLeftPane/DLeftPane'
import ViewRightPane from '../../../components/ViewRightPane/ViewRightPane'
import './DeleteDevices.css'

export default function DeleteDevices() {
  return (
    <div>
        <CoNavBar/>
        <div className='bottomContainer'>
            <DLeftPane/>
            <ViewRightPane/>
        </div>
    </div>
  )
}
