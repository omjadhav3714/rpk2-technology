
import {DeleteOutlined ,EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import React, { useState,useEffect } from 'react';
import { Card } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Adminnav from './Adminnav';
import laptop from "../Images/login.png";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import _ from "lodash";
import { useDispatch } from "react-redux";
import { Button } from 'antd';
import './Singlecard.css';


import { db } from '../Firebase';
const cloudinary = require('cloudinary/lib/cloudinary');
const { Meta } = Card;
const Showitems=({ service })=> {
  const { brand, description, image } = service;
  const { user } = useSelector((state) => ({ ...state }));
  const [tooltip, setTooltip] = useState("Click to add");

  const dispatch = useDispatch();

  // const handleAddToCart = () => {
  //     // create cart array
  //     let cart = [];
  //     if (typeof window !== "undefined") {
  //         // if cart is in local storage GET it
  //         if (localStorage.getItem("cart")) {
  //             cart = JSON.parse(localStorage.getItem("cart"));
  //         }
  //         // push new service to cart
  //         cart.push({
  //             ...s,
  //             count: 1,
  //         });
  //         // remove duplicates
  //         let unique = _.uniqWith(cart, _.isEqual);
  //         // save to local storage
  //         // console.log('unique', unique)
  //         localStorage.setItem("cart", JSON.stringify(unique));
  //         // show tooltip
  //         setTooltip("Added");
  //         //add to redux store
  //         dispatch({
  //             type: "ADD_TO_CART",
  //             payload: unique,
  //         })
  //         //to display add to cart drawer
  //         dispatch({
  //             type: "SET_VISIBLE",
  //             payload: true,
  //         });
  //     }
  // };
  
  
const handleRemove = async () => {
  if(window.confirm("Are you sure want to delete this item?")){
    try{
    await db.collection('items')
    // .where('uid', '==', user.email)
    .doc(brand)
   .delete().then(()=>{
     console.log("Image is here",image)
     
     image.map((image1)=>{
      console.log("Image is here",image1.public_id)
      var image_id = image1.public_id;
      cloudinary.uploader.destroy(image_id, (err, result) => {
          if (err) return 
          // alert( err );
          alert("ok");
      })
     })
   
    
   })
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


    return (
        <>
       

          <Card
      cover={
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src={image && image.length ? image[0].url : laptop}
          style={{ maxHeight:"32vh",marginLeft:"auto",marginRight:"auto",padding:"5px", objectFit: "contain" }}
          className="p-1"
        />
      }
      
       actions={[
         <>
         <Link to={`/itemdetail/${brand}`}><EyeOutlined style={{width: '100%',marginTop:'9px',height: '4vh',textAlign: 'center'}} className="text-warning" /><br /> <h3 style={{
          fontSize:"18px",paddingBottom:"12px",textAlign: 'center'}}>View items</h3></Link>
          {user&&(user.role === 'admin' && <Button onClick={()=>{handleRemove(brand);console.log(brand)}} type="danger" className="mb-3" block shape="round" icon={<DeleteOutlined />} size="small">
                        
                        </Button>)}
          </>
      //   <DeleteOutlined onClick={() => handleRemove(slug)} className="text-danger" />,
       ]}
      >
        {/* <hr/> */}
      <Meta
        title={brand}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
          
        </>
    )
}

export default Showitems
