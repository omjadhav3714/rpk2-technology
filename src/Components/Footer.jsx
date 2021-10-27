import React from "react";
function footer(){
    return(  
    <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

    <div className="footer-newsletter">
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
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <span>Home</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>About us</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Services</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Terms of service</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Privacy policy</span></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <span>Web Design</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Web Development</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Product Management</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Marketing</span></li>
              <li><i className="bx bx-chevron-right"></i> <span>Graphic Design</span></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street<br />
              New York, NY 535022<br />
              United States<br /> 
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>

          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>About Moderna</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links mt-3">
              {/* <span className="twitter"><i className="bx bxl-twitter"></i></span>
              <span className="facebook"><i className="bx bxl-facebook"></i></span>
              <span className="instagram"><i className="bx bxl-instagram"></i></span>
              <span className="linkedin"><i className="bx bxl-linkedin"></i></span> */}
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Name</span></strong>. All Rights Reserved
      </div>
      
    </div>
  </footer>)
}
export default footer;