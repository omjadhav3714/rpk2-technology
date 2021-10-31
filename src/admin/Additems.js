import React from 'react'
import Adminnav from './Adminnav';
import './tables.css';
import { db } from "../Firebase";
function Additems() {
    return (
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Adminnav />
          </div>

          <h1>add services</h1>
          </div>
          </div>
        </>
    )
}

export default Additems
