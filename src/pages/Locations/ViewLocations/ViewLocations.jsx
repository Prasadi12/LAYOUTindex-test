import React from 'react'
import LeftPane from '../../components/LeftPane/LeftPane'
import NavBar from '../../components/Navigation/NavBar'
import ViewRightPane from '../../components/ViewRightPane/ViewRightPnae'

export default function ViewLocations() {
  return (
    <div>
        <NavBar/>
        <div className="bottomContainer">
            <LeftPane/>
            <ViewRightPane/>
        </div>
    </div>
  )
}