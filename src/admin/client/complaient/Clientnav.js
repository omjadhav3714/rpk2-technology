import React from 'react'
import { Link } from 'react-router-dom';
import '../../adminnav.css';

const Clientnav = () => {
    return (
        <>
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/client/addcomplaient" className="nav-link">
                            Add Complaient
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/client/viewcomplaient">
                            View Complaient
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/client/savepasswords">
                            Save Passwords
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/client/viewpasswords">
                            View Passwords
                        </Link>
                    </li>

                </ul>
            </nav>

        </>
    )
}

export default Clientnav
