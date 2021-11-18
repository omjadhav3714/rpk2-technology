/* eslint-disable no-whitespace-before-property */
import React, { useState } from 'react';
import { db } from '../../Firebase';
import './contact.css'

const Contact1 = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  
  const handlesubmit=async()=>{
    
    try {
    await db.collection("contact").doc(name).set({    
      name: name,
      email: email,
      message: message,
    
  }) .then(() => {
  alert("Message sent successully");
  window.location.reload();
  })
  }catch (err) {
    console.error(err);
    alert("Message sent Failed");
  }
};
    return (
       <>
  <div className="con">  
  <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Shop no 4, Shri Malang</div>
          <div class="text-two">Road, Kalyan(E) 421306</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 8850138934</div>
          <div class="text-two">+91 9768074707</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">rpk2technology@gmail.com</div>
          <div class="text-two">rpk2.vocalslocal@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from us or any types of quries, feel free to reach out to us from here. It's our pleasure to help you.</p>
      <form onSubmit={handlesubmit}>
        <div class="input-box">
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setname(e.target.value)} required/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setemail(e.target.value)} required/>
        </div>
        <div class="input-box message-box">
          <textarea placeholder="Enter your message" value={message} onChange={(e) => setmessage(e.target.value)} required/>
        </div>
        <div class="button">
          <input type="button" onClick={handlesubmit} value="Submit"/>
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
       </>
    )
}

export default Contact1
