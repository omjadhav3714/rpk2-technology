
import React, { useState } from 'react';
import { Card } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Adminnav from './Adminnav';
import laptop from "../Images/login.png";
import { Link } from 'react-router-dom';
import _ from "lodash";
import { useDispatch } from "react-redux";

import './Singlecard.css';
const { Meta } = Card;
const Showitems=({ service, handleRemove })=> {
  const { brand, description, images } = service;

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

    return (
        <>
       

          <Card
      cover={
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ maxHeight:"32vh",marginLeft:"auto",marginRight:"auto",padding:"5px", objectFit: "contain" }}
          className="p-1"
        />
      }
      
      // actions={[
      //   <Link to={`/admin/service/${slug}`}><EditOutlined className="text-warning" /></Link>,
      //   <DeleteOutlined onClick={() => handleRemove(slug)} className="text-danger" />,
      // ]}
      >
        <hr/>
      <Meta
        title={brand}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
          
        </>
    )
}

export default Showitems
