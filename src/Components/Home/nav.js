import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import logo from './../../Images/Weblogo.png';
import firebase from 'firebase/compat/app';
import './nav.css';
import { Link,useHistory } from 'react-router-dom';
const Nav=()=> {
  let dispath = useDispatch();
  let history = useHistory();
  const logout = () => {
    firebase.auth().signOut();
    dispath({
      type: "LOGOUT2",
      payload: null,
    });
    alert("Successfully Logout");
    history.push("/");
  };
  const { user } = useSelector((state) => ({ ...state }));
    return (
        <>
           <div className="navt">
      {/* Top Header */}

      <div class="banner-top" style={{ backgroundColor: '#1161a8' }}>
        <div className="social-bnr-agileits">
          <ul className="social-icons3">
            <li><a href="https://www.facebook.com/" className="fa fa-facebook icon-border facebook"> </a></li>
            <li><a href="https://twitter.com/CoolOmcar/" className="fa fa-twitter icon-border twitter"> </a></li>
            <li><a href="https://www.instagram.com/omkarcoolservices/" className="fa fa-instagram icon-border instagram"> </a></li>
          </ul>
        </div>

        <div class="contact-bnr-w3-agile">
          <ul>
            <li id="ic"><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:rpk2.vocalslocal@gmail.com">rpk2.vocalslocal@gmail.com</a></li>
            <li id="ic"><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:+91-7021198075">+91-7021198075</a></li>

            {/* <li className="s-bar">
              <div className="search">
                <input className="search_box" type="checkbox" id="search_box" />
                <label className="icon-search" for="search_box"><span class="fa fa-search" aria-hidden="true"></span></label> */}
                {/* <div className="search_form">
                  <form action="#" method="post">
                    <Search className="sea" />
                  </form>
                </div> */}
              {/* </div>
            </li> */}
          </ul>
        </div>
        <div class="clearfix" style={{ backgroundColor: '#1161a8' }}></div>
      </div>
      {/* Top headers ends */}
      {/* Navbar  */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div style={{display: 'inline-flex',flexWrap:"nowrap",
    flexDirection: 'row',}} className="container">
          <Link class="navbar-brand" to="/"><img alt="" className="log1" src={logo} /></Link>
          {/* <h2>Secutity web</h2> */}
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              {/* <li class="nav-item active">
                <Link class="nav-link" to="/allservices">All Services</Link>
              </li> */}
              <li class="nav-item active">
                <Link class="nav-link" to="/contacts">Contact Us</Link>
              </li>
              {/* <li class="nav-item active">
                <Link class="nav-link" to="/estimate-calculate">Get Estimation</Link>
              </li> */}
              {/* {!user && ( */}
                {!user &&<li class="nav-item active">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>}
              {/* )} */}
              {/* {!user && ( */}
                {/* <li class="nav-item active">
                  <Link class="nav-link" to="/signup">Register</Link>
                </li> */}
              {/* )} */}
              <li class="nav-item active pr-2">
                {/* <Link class="nav-link" to="/cart">
                  <Badge count={cart.length} offset={[9, 0]} >
                    <li style={{ color: "#000" }}>My Cart</li>
                  </Badge>
                </Link> */}
              </li>
            
              {user && (
                 <li class="nav-item active dropdown">
                  <li class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {user.email && user.email.split('@')[0]}
                  </li>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {user.role === 'client' && <div><Link to="/client/clientnav" className="dropdown-item">Dashboard</Link></div>}
                    {user.role === 'admin' && <div><Link to="/admin/additems" className="dropdown-item">Dashboard</Link></div>}
                    <div><li class="dropdown-item" onClick={logout}>Logout</li></div>
                  </div> 
                </li>
               )} 
            </ul>
          </div>
        </div>
      </nav>

      {/* navbar end */}

    </div>

        </>
    )
}

export default Nav
