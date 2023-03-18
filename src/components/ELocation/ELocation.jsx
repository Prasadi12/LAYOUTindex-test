// import React from 'react'
import React, { useState } from 'react';
import './ELocation.css'



export default function ELocation() {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [nodevice, setNodevice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name,
      address,
      phone,
      nodevice,
    };

    fetch('/api/v1.0/Location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log("Register is successful...!")
      })
      .catch(error => {
        console.error(error);
        console.log("Register is not success")
      });
  }

  return (
    <div className='rightPanBox'>
        <div className="form">
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Edit Locations</h3>
            </div>
        </nav>

          <form>
          <div className="form-body">
              <div className="location">
                  <label className="form__label" for="location">Location Name: </label>
                  <input className="form__input" type="text" id="locationname" 
                  value={name} 
                  onChange={event => setName(event.target.value)}
                  placeholder="Location Name"/>
              </div>
              <div className="address">
                  <label className="form__label" for="address">Address: </label>
                  <input  type="text" name="" id="address"  className="form__input"
                  value={address} 
                  onChange={event => setAddress(event.target.value)}
                  placeholder="Address"/>
              </div>
              <div className="pnumber">
                  <label className="form__label" for="pnumber">Phone Number: </label>
                  <input  type="text" id="pnumber" className="form__input"
                  value={phone}
                  onChange={event => setPhone(event.target.value)}
                  placeholder="Phone Number"/>
              </div>
              <div className="devices">
                  <label className="form__label" for="device">No. of Associated Devices: </label>
                  <input className="form__input" type="number"  id="device" 
                  value={nodevice}
                  onChange={event => setNodevice(event.target.value)}
                  placeholder="No. of Devices"/>
              </div>
          
          <div class="footer">
              <button type="submit" class="btn" onSubmit={handleSubmit}>Update</button>
          </div>
          </div>
          </form>
      </div>
        
    </div>
  )
}

