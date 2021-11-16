/* eslint-disable array-callback-return */
import firebase from 'firebase/compat/app';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import React from 'react';
import { Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import laptop from "../../../Images/login.png";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../../Singlecard.css';
import { db } from '../../../Firebase';


const cloudinary = require('cloudinary/lib/cloudinary');
const { Meta } = Card;
const Showcomplaient = ({ service, co }) => {

  const { brand, description, image, c_id } = service;
  const { user } = useSelector((state) => ({ ...state }));

  const handleRemove = async () => {

    if (window.confirm("Are you sure want to delete this Complaient?")) {
      try {
        await db.collection('complaient')
          // .where('uid', '==', user.email)
          .doc(user.email)
          .update({
            "comp": firebase.firestore.FieldValue.arrayRemove(co[co.indexOf(service)])
          }).then(() => {
            //  console.log("Image is here",image)

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
      <Card
        cover={
          // eslint-disable-next-line jsx-a11y/alt-text
          <img
            src={image && image.length ? image[0].url : laptop}
            style={{ maxHeight: "32vh", marginLeft: "auto", marginRight: "auto", padding: "5px", objectFit: "contain" }}
            className="p-1"
          />
        }

        actions={[
          <>
            <Link to={`/client/viewdetailcom/${c_id}`}><EyeOutlined className="cust2" /><br /> <h3 style={{
              fontSize: "20px", textAlign: 'center'
            }}>View items</h3></Link>
            {user && (user.role === 'client' && <Button onClick={() => { handleRemove(); console.log(brand) }} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">
            </Button>)}
          </>
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

export default Showcomplaient
