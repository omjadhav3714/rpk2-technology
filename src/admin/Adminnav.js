import React from 'react'
import { Link } from 'react-router-dom';
import './adminnav.css';

const Adminnav=()=> {
    return (
        <>
         <nav>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/admin/additems" className="nav-link">
                 Add items's   
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/viewitems">
                    View items's
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/useretrive" className="nav-link">
                    Users details
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/contactretrive" className="nav-link">
                     Contact us
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/testimonial" className="nav-link">
                     Testimonial
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/complaient" className="nav-link">
                     View Complaient
                </Link>
            </li>

            
            </ul>
            </nav>

        </>
    )
}

export default Adminnav
