/* eslint-disable react-hooks/exhaustive-deps */
import laptop from "../../../Images/login.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router";
import Compcarddetail from "./Compcarddetail";
import { db } from "../../../Firebase";



function Compdetail() {
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
                .doc(user.email)
                .get()
                .then(async doc => {
                    if (doc && doc.exists) {
                        setService(arr => [...arr, doc.data()]);
                        db.collection("compdetail").doc(id)
                            .get().then((doc) => {
                                setdet(doc.data());
                                console.log("Current data: ", det.price);
                            });
                        console.log("This is doc", det.price)
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



    // const {  description, image } = item;


    const { user } = useSelector((state) => ({ ...state }));
    return (
        <>
     
            {console.log("this is item", item)}
            {item.map((p) => (
                <div key={p.c_id}>
                    {p.comp.map((h) => (
                        (h.c_id == id) ?
                            <div className="row pt-4" key={h.name}>
                                <div className="col-md-7">
                                    {h.image && h.image.length ? (
                                        <Carousel autoPlay infiniteLoop showArrows={false}
                                            showStatus={false}>
                                            {h.image && h.image.map((i) => <img src={i.url} key={i.public_id} alt="" style={{ maxWidth: "50%" }} />)}
                                        </Carousel>
                                    ) : (
                                        <Card cover={<img src={laptop} className="mb-3 card-image" alt="" />}></Card>
                                    )}
                                </div>
                                <div className="col-md-5">
                                    <Card >
                                        <Compcarddetail item1={h} id={id} det={det} />
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

export default Compdetail
