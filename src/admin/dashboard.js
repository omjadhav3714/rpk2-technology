import React from 'react'
import Adminnav from './Adminnav'
import './adminnav.css';
import '../Components/Home/home.css';
function Dashboard() {
    return (
        <>
         <div className="row">
        <div className="mobile col-md-2">
          <Adminnav />
        </div>

        <div className="col-md-10">
          <h4 className="text1">Add service's</h4>
          <br />
          {/* <Orders
            orders={orders}
            handleStatusChange={handleStatusChange}
            handleRemove={handleRemove}
          /> */}
        </div>
      </div>
        </>
    )
}

export default Dashboard
