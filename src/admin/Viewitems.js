import React from 'react'
import Adminnav from './Adminnav';
import './tables.css';
import { db } from "../Firebase";
function Viewitems() {
    return (
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Adminnav />
          </div>

          <h1>View services</h1>
          </div>
          </div>
        </>
    )
}

export default Viewitems
