import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {DeleteOutlined ,EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { db } from "../Firebase";
import './tables.css';
import Adminnav from './Adminnav';
const Usersretrive=()=> {
    const [services, setServices] = useState([]);
  useEffect(() => {
    loadAllServices();
  }, []);

  const { user } = useSelector((state) => ({ ...state }));
  const loadAllServices = async() => {
    await db.collection('users').get().then((querySnapshot) => {
             
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
              <h2>Users </h2>
              <ul class="responsive-table">
                <li class="table-header">
                  <div class="col col-1">Name</div>
                  <div class="col col-2">Gmail</div>
                  <div class="col col-3" style={{ paddingRight: '16vw' }}>Role</div>

                </li>
                {console.log("here is user",services)}
                {services.map((s) => (
                  <>
                    <li class="table-row">
                      <div class="col col1" data-label="Name">{s.name}</div>
                      <div class="col col2 " data-label="Gmail">{s.email}</div>
                      <div class="col col8" data-label="Role">{s.role}</div>
                      {user&&(user.role === 'admin' && <Link to={`/admin/changerole/${s.email}`}><EditOutlined  type="primary" className="mb-3 custom1" block shape="round"  size="small"/></Link>
                        
                        )}                        
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

export default Usersretrive
