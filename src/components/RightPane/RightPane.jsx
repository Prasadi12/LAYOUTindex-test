import React from 'react'
import './RightPane.css'

export default function RightPane() {
  return (
    <div className='rightPanBox'>
        <div className="form">
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Register Locations</h3>
            </div>
        </nav>

        
          <div className="form-body">
              <div className="location">
                  <label className="form__label" for="location">Location Name: </label>
                  <input className="form__input" type="text" id="locationname" placeholder="Location Name"/>
              </div>
              <div className="address">
                  <label className="form__label" for="address">Address: </label>
                  <input  type="text" name="" id="address"  className="form__input"placeholder="Address"/>
              </div>
              <div className="pnumber">
                  <label className="form__label" for="pnumber">Phone Number: </label>
                  <input  type="text" id="pnumber" className="form__input" placeholder="Phone Number"/>
              </div>
              <div className="devices">
                  <label className="form__label" for="device">No. of Associated Devices: </label>
                  <input className="form__input" type="number"  id="device" placeholder="No. of Devices"/>
              </div>
          
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
          </div>
      </div>
        
    </div>
  )
}