import React from 'react'
import CoNavBar from '../../../components/CommonNavBar/CoNavBar'
import DLeftPane from '../../../components/DLeftPane/DLeftPane'
import DRightPane from '../../../components/DRightPane/DRightPane'
import './AddDevices.css'

export default function AddDevices() {
  return (
    <div>
        <CoNavBar/>
    <div  className='bottomContainer'>
        <DLeftPane/>
        <DRightPane/>
    </div>
    </div>
  )
}
