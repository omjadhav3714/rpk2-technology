import React, { useState, useEffect } from 'react';
import './tables.css';  
import Adminnav from './Adminnav';
import { db } from "../Firebase";
function Contactretrive() {
    const [services, setServices] = useState([]);
    useEffect(() => {
      loadAllServices();
    }, []);
  
  
    const loadAllServices = async() => {
      await db.collection('contact').get().then((querySnapshot) => {
               
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
              setServices(arr => [...arr , data]);
                
          });
      })
      
    };
    return (
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Adminnav />
          </div>

          <div className="col-md-10">
            <div class="container3">
              <h2>Contact us</h2>
              <ul class="responsive-table">
                <li class="table-header">
                  <div class="col col-1">Name</div>
                  <div class="col col-2">Gmail</div>
                  <div class="col col-3" style={{ paddingRight: '16vw' }}>Message</div>

                </li>
                {console.log("here is user",services)}
                {services.map((s) => (
                  <>
                    <li class="table-row">
                      <div class="col col1" data-label="Name">{s.name}</div>
                      <div class="col col2 " data-label="Gmail">{s.email}</div>
                      <div class="col col8" data-label="Message">{s.message}</div>
                    </li>

                  </>
                 ))} 

              </ul>
            </div>

          </div>
          </div>
          </div>
        </>

    )
}

export default Contactretrive
