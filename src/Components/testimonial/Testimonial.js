import React, { useState } from 'react';
import './Testimonial.css'
import about from '../../Images/testimonial.gif';
import { db } from '../../Firebase';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Testimonial = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [name, setName] = useState("");
  let history = useHistory();
  const [testimonial, settest] = useState("");
  const handleSubmit = async (e) => {
    if (user) {
      e.preventDefault();
      await db.collection("testimonialsend").doc(name).set({

        name: name,
        testimonial: testimonial,

      })
        .then((res) => {
          console.log(res);
          window.alert(`"${res.data.brand}" is created`);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Thank you for your testimonial")
          window.location.reload();
          history.push("/");
          // alert(err.response.data.err);
        });
    }
    else {
      alert('Please login to send testimonial');
    }
  };
  return (


    <>
      <div className="aboutain">
        <img alt="" src={about} className="giffy" />
        <div class="center">
          <h1>Testimonial</h1>
          <form onSubmit={handleSubmit} >
            <div class="inputbox">
              <input type="text" onChange={e => setName(e.target.value)} required="required" autoComplete="off" />
              <span>Name</span>
            </div>
            <div class="inputbox">
              <textarea required="required" onChange={e => settest(e.target.value)} autoComplete="off" />
              <span>Testimonial</span>
            </div>
            <div class="inputbox">
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </>


  )
}

export default Testimonial
