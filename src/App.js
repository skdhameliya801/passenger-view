import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// const axios = require("axios").default;


function App() {

  let [submitted, setSubmitted] = useState(false)
  let [isLoader, setIsLoader] = useState(false)

  let onload_iframe = () => {
    if(submitted){
        // window.location.href = "http://localhost:3000/"
        // window.location.replace("http://localhost:3000/")
        document.getElementById("success_msg").style.display = "block"
        document.getElementById("contact_us_form").style.display = "none"
    }
}

let passenger_form_submit = () => {
  // setSubmitted(true)
  let full_name = document.getElementById("full_name").value
  let full_pickup_address = document.getElementById("full_pickup_address").value
  let pickup_landmark = document.getElementById("pickup_landmark").value
  let phone_no = document.getElementById("phone_no").value
  let full_drop_address = document.getElementById("full_drop_address").value
  let arrive_by_HH = document.getElementById("arrive_by_HH").value
  let arrive_by_MM = document.getElementById("arrive_by_MM").value
  let arrive_by_am_pm = document.getElementById("arrive_by_am_pm").value

  
  if(full_name && full_pickup_address && pickup_landmark && phone_no && full_drop_address && arrive_by_HH && arrive_by_MM && arrive_by_am_pm){
    console.log(full_name, full_pickup_address, pickup_landmark, phone_no, full_drop_address, arrive_by_HH, arrive_by_MM, arrive_by_am_pm)

    const actionURL = 'https://docs.google.com/forms/d/e/1FAIpQLSe484iWB4c2iaKlRj8nZV4DowW6QZKbTIK20K-ExvWdm_T78w/formResponse';
    let formData = {
      "entry.1861375145" : full_name,
      "entry.1854060540" : full_pickup_address,
      "entry.1353282613" : pickup_landmark,
      "entry.1079373065" : phone_no,
      "entry.228591953" : full_drop_address,
      "entry.523573579" : arrive_by_HH + ":" + arrive_by_MM + " " + arrive_by_am_pm
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: actionURL,
      "Access-Control-Allow-Origin":"*",
      data : formData
  };

    axios.request(config)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });

    // axios.post(
    //   {
    //     actionURL, 
    //     formData,
    //     "Access-Control-Allow-Origin":"*"
    //   })
    // .then((response) => {
    //   // Handle successful response here
    //   console.log('Response:', response.data);
    //   // You can do additional logic here after a successful POST if needed
    // })
    // .catch((error) => {
    //   // Handle error here
    //   console.error('Error:', error);
    // });

  }else{
    alert("fill all details")
  }
}

  return (
  <>
    <iframe 
            title='hiddenConfirm' 
            name='hiddenConfirm' 
            id='hiddenConfirm' 
            style={{"display":"none"}} 
            src="" frameborder="0"
            onLoad={() => onload_iframe()}>
        </iframe>

  
    <div className="container mt-5 mb-5 pl-2 pr-2">
      { submitted && <h3 id="success_msg" className='text-center mt-5 justify-content-center align-content-center'>We received your ride details, Thanks.</h3> }
        <form 
          id='contact_us_form'
          method='POST'
          action='https://docs.google.com/forms/d/e/1FAIpQLScExgtYwLvETQvX9HjWGR4ucGmkEceOg4-kCAb17s77R4VLlQ/formResponse'
          onSubmit={() => setSubmitted(true)}
          target='hiddenConfirm'
          onLoad={() => onload_iframe()}>
            
          <div className="row mt-5 justify-content-center">
            <h1 className='text-center'><b>KWC- Stratford Ride Details</b> </h1>
            <div className="col-sm-6 mt-5">
                <label className="form-label"> <b>*Full Name : </b> </label>
                <input type="text" id='full_name' name='entry.578647043' className="form-control border-5" required />
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-sm-6">
              <label className="form-label"> <b>*Full Pickup Address : </b> <br/> (Format :  House no, Street/Apartment name, Pincode, City)</label>
              <input type="text" id='full_pickup_address' name='entry.946132332' className="form-control border-5" required />
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-sm-6">
              <label className="form-label"> <b>*Nearest Landmark of above Pickup Address : </b> </label>
              <select className="form-select border-5" id='pickup_landmark' name='entry.1343336432' required>
                <option selected>Choose...</option>
                <option>1.0 - Conestoga Mall</option>
                <option>2.0 - University of Waterloo</option>
                <option>3.0 - Conestoga College Waterloo Campus</option>
                <option>4.0 - Sobeys Columbia Laurelwood</option>
                <option>5.0 - Walmart at Boardwalk</option>
                <option>6.0 - Central Frederick</option>
                <option>7.0 - Walmart at Sunrise Shopping Centre</option>
                <option>8.0 - Block Line Station</option>
                <option>9.0 - Fairview Park</option>
                <option>10.0 - Doon South</option>
                <option>11.0 - Conestoga College Doon Campus</option>
                <option>12.0 - Toyota Motor Manufacturing Inc Cambridge</option>
                <option>13.0 - Preston Cambridge</option>
                <option>14.0 - Walmart at Pinebush Cambridge</option>
                <option>15.0 - Hespeler Mill Pond Cambridge</option>
                <option>16.0 - Fiddlesticks Cambridge</option>
                <option>17.0 - Biryaniwalla Cambridge</option>
                <option>18.0 - Cambridge Cricket Club</option>
                <option>19.0 - Southwood Cambridge</option>
                <option>20.0 - Churchill Park Cambridge</option>
                <option>21.0 - Decaro Park Cambridge</option>
              </select>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-sm-6">
              <label className="form-label"> <b>*Phone No :</b> <br/> (Format : only 10 digits canadian number, avoid country code)  </label>
              <input type="number" className="form-control border-5" id='phone_no' name='entry.1434501103' required />
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-sm-6">
              <label className="form-label"> <b>*Full Drop Address : </b> <br/> (Format :  House no, Street/Apartment name, Pincode, City)</label>
              <input type="text" className="form-control border-5" id='full_drop_address' name='entry.1059112272' required />
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-sm-6">
              <label className="form-label"> <b>*Arrive By Time at Drop Address : </b> </label>
              <input type="time" className="form-control border-5" id='arrive_by_time' name='entry.452012505' required />
            </div>
          </div>

          {/* <div className="row mt-5 justify-content-center">
            <div className="col-sm-6">
              <label className="form-label"> <b>*Arrive By Time at Drop Address : </b> <br/> (Format : hh:mm AM/PM)</label>
                <div className="row justify-content-center align-items-center g-2">
                  <div className="col-4">
                    <input type="text" className="form-control border-5" id='arrive_by_HH' placeholder='hh' />
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control border-5" id='arrive_by_MM' placeholder='mm' />
                  </div>
                  <div className="col-4">
                    <select className="form-select border-5" id='arrive_by_am_pm'>
                      <option selected>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>
            </div>
          </div> */}

          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <center>
                <button type="submit" className="btn btn-success" onClick={() => setIsLoader(true)}>{isLoader? <span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span> : "Submit"}</button>
                {/* <button type="submit" id='login_btn' className='btn btn-success'>Login</button> */}

              </center>
            </div>
          </div>
          
        </form>
    </div>
  </>
  );
}

export default App;
