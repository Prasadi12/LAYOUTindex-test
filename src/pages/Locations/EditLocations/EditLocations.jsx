import React from 'react'
import CoNavBar from '../../../components/CommonNavBar/CoNavBar'
import LeftPane from '../../../components/LeftPane/LeftPane'
import RightPane from '../../../components/RightPane/RightPane'
import './EditLocations.css'

export default function EditLocations() {
  return (
    <div>
        <CoNavBar/>
    <div className='bottomContainer'>
        <LeftPane/>
        <RightPane/>
    </div>
    </div>
  )
}
