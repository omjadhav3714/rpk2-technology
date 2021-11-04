import React from 'react'
import './gototestimonial.css'
import { Link } from 'react-router-dom'

const gototestimonial = () => {
    return (
            <>
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
	
    <div class="control">   
        <button class="btn">        
            <span class="shopping-cart"><i class="fas fa-arrow-right" aria-hidden="true"></i></span>
            <Link to="/testimonial"><span class="buy">Add Testimonial</span></Link>
        </button>      
    </div>
			
    </div>
        
        <div class="product-image">
            <img src="https://leadsquared.co.za/wp-content/uploads/2020/05/LeadSquared-Testimonials.png" alt=""/>
        </div>

</div>
            </>
        
    )
}

export default gototestimonial
