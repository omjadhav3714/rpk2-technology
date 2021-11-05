
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { toast } from 'react-toastify';
import './Testimonial.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import user1 from '../../Images/u1.png';
import { db } from '../../Firebase';
const Hometestimonial = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const [values, setValues] = useState([]);
    useEffect(() => {
        retrive();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      const retrive=async()=>{
        try{
            await db.collection('Approvetestimonial').get().then((querySnapshot) => {
             
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
    
    const handleRemove=async(nam)=>{
        if(window.confirm("Are you sure want to delete this Testimonial?")){
            try{
            await db.collection('Approvetestimonial')
            // .where('uid', '==', user.email)
            .doc(nam)
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
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1300 },
          items: 3,
    
        },
        midlap: {
          breakpoint: { max: 1300, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <>
        <div className="cou">
        <h4 className="heading1">Testimonial</h4>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} swipeable={true} infinite={true} showDots={true}>
        {values.map((s) => (
          <div key={s.id} className="crads7">
            <figure class="snip1192" >
              <blockquote>{s.testimonial} </blockquote>SS
              <div class="author">

                <img src={user1} alt='user icon' style={{ height: '85px', width: '85px' }} />
                <h5>{s.name} </h5>
              </div>
            </figure>
            {user && (user.role === 'admin' && <Button onClick={() => { handleRemove(s.name); console.log(s.slug) }} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">

            </Button>)}
          </div>
        ))}

        {/* </div> */}
      </Carousel>
      </div>
        </>
    )
}

export default Hometestimonial
