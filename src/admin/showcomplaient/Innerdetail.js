/* eslint-disable react-hooks/exhaustive-deps */
import laptop from "../../Images/login.png";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router";
import Innerdesc from "./Innerdesc";
import { db } from "../../Firebase";


function Innerdetail() {
    const { id } = useParams();

    const [item, setService] = useState([]);
    const [det, setdet] = useState([]);
    useEffect(() => {
        retrive();
    }, []);
    const retrive = async () => {
        try {
            await db.collection('complaient')
                // .where('uid', '==', user.email)

                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(element => {
                        var data = element.data();
                        setService(arr => [...arr, data]);
                    });
                    db.collection("compdetail").doc(id)
                        .get().then((doc) => {
                            setdet(doc.data());
                            console.log("Current data: ", det.price);
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

    return (
        <>
     

        {console.log("This is id",id)}
            {item.map((p) => (
                <div key={p.rand} >
                    {p.comp.map((h) => (
                        (h.c_id == id) ?
                            <div className="row pt-4" key={h.c_id}>
                                <div className="col-md-7">
                                    {h.image && h.image.length ? (
                                        <Carousel autoPlay infiniteLoop showArrows={false}
                                            showStatus={false}>
                                            {h.image && h.image.map((i) => <img src={i.url} key={i.public_id} alt="" style={{ maxWidth: "50%" }} />)}
                                        </Carousel>
                                    ) : (
                                        <Card cover={<img src={laptop} className="mb-3 card-image" alt="" />}></Card>
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
                                    <Card >

                                        <Innerdesc item1={h} det={det} />
                                    </Card>
                                </div>
                            </div>
                            : console.log("not there")

                    ))}
                </div>
            ))}

        </>
    )
}

export default Innerdetail
