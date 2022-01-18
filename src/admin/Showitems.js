/* eslint-disable array-callback-return */
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import laptop from "../Images/login.png";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './Singlecard.css';


import { db } from '../Firebase';
const cloudinary = require('cloudinary/lib/cloudinary');
const { Meta } = Card;
const Showitems = ({ service }) => {
  const { brand, description, image } = service;
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const handlegetnow = async(e) => {
    e.preventDefault();
    const min = 1;
    const max = 100000000000;
    const rand = min + Math.random() * (max - min);
    await db.collection("itemRequest").doc(parseInt(rand).toString()).set({
        itembrand: brand,
        // image: image,
        // s_id: parseInt(rand),
        email: user.email,
        address: address,
        contact: contact,
        sreq_id: parseInt(rand),

    })
        .then((res) => {
            console.log(res);
            // window.alert(`"${res.data.brands}" is created`);
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
            alert("Item added")
            window.location.reload();
        });
};
  const handleRemove = async () => {
    if (window.confirm("Are you sure want to delete this item?")) {
      try {
        await db.collection('items')
          // .where('uid', '==', user.email)
          .doc(brand)
          .delete().then(() => {
            console.log("Image is here", image)

            image.map((image1) => {
              console.log("Image is here", image1.public_id)
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
     <motion.div
       
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
     >

      <Card
        cover={
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={image && image.length ? image[0].url : laptop}
            style={{ maxHeight: "28vh", marginLeft: "auto", marginRight: "auto", padding: "5px", objectFit: "contain", }}
            className="p-1"
          />
        }

        actions={[
          <>
            <Link to={`/itemdetail/${brand}`}><EyeOutlined className="cust2" /><br /> <h3 style={{
              fontSize: "20px", textAlign: 'center'
            }}>View items</h3></Link>
            {user && (user.role === 'admin' && <Button onClick={() => { handleRemove(brand); console.log(brand) }} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">

            </Button>)}

            {user && (user.role === 'admin' && <Link to={`/admin/edititem/${brand}`}><EditOutlined type="primary" className="mb-3 custom1" block shape="round" size="small" /></Link>

            )}
             {user && (<button className="btn btn-primary" onClick={() => setOpen(true)} style={{ float: "right" }}>Get now</button>)}
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
      <Modal open={open} center onClose={() => setOpen(false)}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                    <textarea
                        type="text"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                        className="form-control"
                        placeholder="Enter Your Address"
                        required
                    ></textarea>
                    <br />
                    <input
                        onChange={(e) => {
                            setContact(e.target.value);
                        }}
                        value={contact}
                        type="text"
                        maxLength='10'
                        className="form-control"
                        placeholder="Enter your contact no"
                        required
                    />
                    <br />
                    <button onClick={handlegetnow} disabled={!address || !contact} className="btn btn-primary mt-2">Place Request</button>
                </Modal>
</motion.div>
    </>
  )
}

export default Showitems
