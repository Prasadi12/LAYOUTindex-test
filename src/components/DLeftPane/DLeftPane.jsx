import React from 'react'
import './DLeftPane.css'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';


export default function DLeftPane() {
  return (
    <div className='leftPaneBox'>
    <div className="leftPaneContainer">
      <div className="list">
        <li className="listItem">
          <Link to='/AddDevices'>
          <AddLocationIcon className='addLocationIcon'/>
          <span className="listItemName">Add Devices</span>
          </Link>
        </li>
        <li className="listItem">
          <Link to='ViewDevices'>
          <LocationOnIcon className='locationOnIcon'/>
          <span className="listItemName">Veiw Devices</span>
          </Link>
        </li>
        <li className="listItem">
          <Link to='EditDevices'>
          <EditLocationAltIcon className='editLocationAltIcon'/>
          <span className="listItemName">Edit Devices</span>
          </Link>
        </li>
        <li className="listItem">
          <Link to='DeleteDevices'>
          <DeleteForeverIcon className='deleteForeverIcon'/>
          <span className="listItemName">Delete Devices</span>
          </Link>
        </li>
        <hr/>
        <div className='post'>
          <div className="postContainer">
            <div className="heading">
              <h2>Welcome to the site..!</h2>
            </div>
            <div className="body">
              <p>
                This is a Location Management System (LMS). This site is only accepting the locations in Sri Lanaka. If your company location is not registered, you can use this service for registering the locations and devices that managed by these locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
