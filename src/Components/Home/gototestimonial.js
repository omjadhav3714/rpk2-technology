import React from 'react'
import './gototestimonial.css';
import { Link } from 'react-router-dom'

const gototestimonial = () => {
    return (
            <>
            <div className="maintest">
<div id="container">	
        <div class="product-details">
            
        <h1>Become a Testimonial</h1>
        <span class="hint-star star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>
            
        <p class="information">"Your Reviews are our priority, Make sure give us your true feedback"</p>
	
        <div className="butt">
            <Link class="cta hp" to="/testimonial">
              <span className="hp">Add Testimonial</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </Link>
          </div>
			
    </div>
        
        <div class="product-image">
            <img src="https://leadsquared.co.za/wp-content/uploads/2020/05/LeadSquared-Testimonials.png" alt=""/>
        </div>

</div>
</div>
            </>
        
    )
}

export default gototestimonial
