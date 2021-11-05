import { useParams } from "react-router";
import { ArrowRightOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Adminnav from '../../admin/Adminnav';
import { db } from '../../Firebase';
import './../testimonial/Testimonial.css'
import './gototestimonial.css';

import user1 from '../../Images/u1.png';
const ReadTestimonial = () => {
    const {id}=useParams();
    const [values, setValues] = useState([]);
    const { user } = useSelector((state) => ({ ...state }));
    useEffect(() => {
        retrive();
      }, []);

      const handleremove=async(nam2)=>{
        if(window.confirm("Are you sure want to delete this Testimonial?")){
            try{
            await db.collection('testimonialsend')
            // .where('uid', '==', user.email)
            .doc(nam2)
           .delete()
           .catch((error) => {
            console.log(error);
          });
          window.location.reload()  
            
        } catch (err) {
            console.error(err);
            alert(err.message);
          }
        } 

      };
    const retrive=async()=>{
        try{
            await db.collection('testimonialsend').get().then((querySnapshot) => {
             
                // Loop through the data and store
                // it in array to display
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setValues(arr => [...arr , data]);
                      
                });
            })
           .catch((error) => {
            console.log(error);
          });
              
            
        } catch (err) {
            console.error(err);
            alert(err.message);
          }
    };
    
    const handleSubmit=async(nam)=>{
        if(window.confirm("Verify Testimonial")){
        await db.collection('testimonialsend')
        // .where('uid', '==', user.email)
        .doc(nam)
       .get()
       .then(async doc => {
          if (doc && doc.exists) {
            var  separatedString = doc.data();
             //use separatedString
             await db.collection("Approvetestimonial").doc(separatedString.name).set({
          
                name:separatedString.name,
                testimonial:separatedString.testimonial,
                  
                })
                    .then((res) => {
                        console.log(res);
                        window.alert(`"${res.data.brand}" is created`);
                        window.location.reload();
                    })
               
            }
       }).catch((error) => {
            console.log(error);
          });
        }
    }
    return (
        <>
        <div className="row">
          <div className="col-md-2">
            <Adminnav />
          </div>

          <div className="col-md-10">
            <div className="testpost">
              {values.map((s) => (
                <div key={s.id} className="crads7">
                  <figure class="snip1192" >
                    <blockquote>{s.name} </blockquote>
                    <div class="author">

                      <img src={user1} alt='user icon' style={{ zIndex:'0',height: '85px', width: '85px' }} />
                      <h5>{s.testimonial} </h5>
                    </div>
                  </figure>
                  {user && (user.role === 'admin' && <Button onClick={() => { handleSubmit(s.name) }} type="primary" className="mb-3 custom" block shape="round" icon={<ArrowRightOutlined />} size="small">

                  </Button>)} &nbsp;&nbsp;&nbsp;&nbsp;
                  {user && (user.role === 'admin' && <Button onClick={() => { handleremove(s.name) }} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">

                  </Button>)}
                </div>
              ))}
            </div>
          </div>
        </div>


        </>

    )
}

export default ReadTestimonial
