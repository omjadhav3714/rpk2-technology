/* eslint-disable react-hooks/exhaustive-deps */
import laptop from "../../Images/login.png";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Itemcarddetail from "./Itemcarddetail";
import { motion } from "framer-motion";

import { useParams } from "react-router";
import { db } from "../../Firebase";
function Itemdetail() {
  const { id } = useParams();

  const [item, setService] = useState([]);

  useEffect(() => {
    retrive();
  }, []);
  const retrive = async () => {
    try {
      await db
        .collection("items")
        // .where('uid', '==', user.email)
        .doc(id)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            setService(doc.data());
            console.log("This is doc", doc.data());
            //use separatedString
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const { image } = item;

  return (
    <>
      <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row pt-4">
          <div className="col-md-7">
            {image && image.length ? (
              <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showStatus={false}
              >
                {image &&
                  image.map((i) => (
                    <img
                      src={i.url}
                      key={i.public_id}
                      alt=""
                      style={{ maxWidth: "50%" }}
                    />
                  ))}
              </Carousel>
            ) : (
              <Card
                cover={<img src={laptop} className="mb-3 card-image" alt="" />}
              ></Card>
            )}
            {/* <Tabs type="card">
                    <TabPane tab="Description" key="1">
                        {description && description}
                    </TabPane> */}
            {/* <TabPane tab="Services" key="2">
                        {services && services}
                    </TabPane>
                    <TabPane tab="Other Services" key="3">
                        {otherservices && otherservices}
                    </TabPane> */}
            {/* </Tabs> */}
          </div>
          <div className="col-md-5">
            <Card>
              <Itemcarddetail item1={item} />
            </Card>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Itemdetail;
