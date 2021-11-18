import React from "react";
import { Link } from "react-router-dom";
function footer(){
    return(  
    <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

    {/* <div className="footer-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input className="fotemail" type="email" name="email" /><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div> */}

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/"><i className="bx bx-chevron-right"></i> <span>Home</span></Link></li>
              <li><Link to="/about"><i className="bx bx-chevron-right"></i> <span>About</span></Link></li>
              <li><Link to="/contacts"><i className="bx bx-chevron-right"></i> <span>Contact us</span></Link></li>
              <li><Link to="/testimonial"><i className="bx bx-chevron-right"></i> <span>Testimonial</span></Link></li>
              <li><Link to="/login"><i className="bx bx-chevron-right"></i> <span>Login</span></Link></li>
              {/* <li><i className="bx bx-chevron-right"></i> <span>Privacy policy</span></li> */}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <span>IP CCTV System</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Networking</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Biometric</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>EPBX Systems</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Inverter</span></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              Shop No 4,Opp Jankalyan Hospital,<br />
              Amardeep Railway staff colony, <br/>Shri Malang Road<br />
              Kalyan (E) 421306<br /> 
              <strong>Phone:</strong> 8850138934<br />
              <strong>Email:</strong> rpk2technology@gmail.com<br />
            </p>

          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>Social Links</h3>
            <div className="social-links mt-3">
              <span className="icon"><a href=""><i className="fa fa-twitter"></i></a></span>
              <span className="icon ml-1"><a href=""><i className="fa fa-facebook"></i></a></span>
              <span className="icon ml-1"><a href=""><i className="fa fa-instagram"></i></a></span>
              <span className="icon ml-1"><a href="https://wa.me/+918976129650?text=Hi%20I'm%20interested%20for%20opting%20for%20a%20service"><i className="fa fa-whatsapp"></i></a></span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Rpk2 Technology</span></strong>. All Rights Reserved
      </div>
      
    </div>
  </footer>)
}
export default footer;