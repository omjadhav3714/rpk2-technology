import React from 'react'
import './Testimonial.css'
import about from '../../Images/testimonial.gif';

const testimonial = () => {
  return (
    <div>
      <>
      <>
      <div className="aboutain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <img alt="" src={about} className="giffy" />
        <div class="center">
          <h1>Testimonial</h1>
          <form >
            <div class="inputbox">
              <input type="text"  required="required" autoComplete="off"  />
              <span>Name</span>
            </div>
            <div class="inputbox">
              <textarea required="required" autoComplete="off" />
              <span>Testimonial</span>
            </div>
            <div class="inputbox">
              <input type="button" value="submit"/>
            </div>
          </form>
        </div>
      </div>
    </>
      </>
    </div>
  )
}

export default testimonial
