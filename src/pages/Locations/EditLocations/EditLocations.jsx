import React from 'react'
import CoNavBar from '../../../components/CommonNavBar/CoNavBar'
import LeftPane from '../../../components/LeftPane/LeftPane'
import RightPane from '../../../components/RightPane/RightPane'
import ELocation from '../../../components/ELocation/ELocation'
import './EditLocations.css'

export default function EditLocations() {
  return (
    <div>
        <CoNavBar/>
    <div className='bottomContainer'>
        <LeftPane/>
        <ELocation/>
    </div>
    </div>
  )
}
