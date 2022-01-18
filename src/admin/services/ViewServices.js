/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import ViewServiceCard from './ViewServiceCard';
import { db } from '../../Firebase';
import Adminnav from '../Adminnav';

const ViewServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    useEffect(() => {
        loadAllServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);


    const loadAllServices = async () => {
        setLoading(true);
        // getServices("price", "desc", page)
        const items = await db.collection('services')
            // .where('uid', '==', user.email)
            // .doc()
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setServices(arr => [...arr, data]);
                });
                setLoading(false);
            });
    };

    return (
        <>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >

                <div className="row">
                    <div className="col-md-2">
                        <Adminnav />
                    </div>
                    <div className="col">
                        {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4 className="heading">All Services</h4>)}
                        <div className="row-wrap">{services.map((p) => (
                            <div className="col-md-4 pb-3" key={p.brand}>
                                <ViewServiceCard service={p} />
                            </div>
                        ))}
                        </div>
                    </div>

                </div>
            </motion.div>
        </>
    )
};

export default ViewServices;
