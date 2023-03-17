import React from 'react'
import './DRightPane.css'

export default function DRightPane() {
  return (
    <div className='rightPanBox'>
        <div className="form">
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Register Devices</h3>
            </div>
        </nav>

        
          <div className="form-body">
              <div className="snumber">
                  <label className="form__label" for="location">Serial Number: </label>
                  <input className="form__input" type="text" id="snumber" placeholder="Serial Number"/>
              </div>
              <div className='form-body'>
                <label className='form_label' for="type">Type: </label>
                <select className='input'>
                <option value="">Select an option</option>
                <option value="option1">Pos</option>
                <option value="option2">Kisok</option>
                <option value="option3">Signage</option>
                </select>
              </div>
              <div className="address">
                  <label className="form__label" for="img">Image: </label>
                  <input  type="file" name="" id="img"  className="form__input"/>
              </div>
              <div className="pnumber">
                  <label className="form__label" for="pnumber">Status: </label>
                  
                  <input  type="radio" id="pnumber" className="form__input" placeholder="Phone Number"/>
                  <label className='lable-1'>Active   </label>
                  
                  <input  type="radio" id="pnumber" className="form__input" placeholder="Phone Number"/>
                  <label className='lable-2'>Inactive</label>
                  
              </div>
              
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
          </div>
      </div>
        
    </div>
  )
}
