/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import LoadingCard from './Loadingcard';
import { db } from '../../Firebase';
import { motion } from "framer-motion";
import Showitems from '../../admin/Showitems';
import './../../admin/Singlecard.css';
import ViewServiceCard from './../../admin/services/ViewServiceCard';

function Homeitems() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setsearch] = useState('');
    const [page, setPage] = useState(1);
    const [servicehome, setServiceHome] = useState([]);
    useEffect(() => {
        loadAllServices();
        loadServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);


    const loadAllServices = async () => {

        setLoading(true);
        const items = await db.collection('items')

            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setServices(arr => [...arr, data]);
                });
                setLoading(false);
            });
    };

    const loadServices = async () => {
        setLoading(true);
        const services = await db.collection("services")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setServiceHome(arr => [...arr, data]);
                });
                setLoading(false);
            });
    }

    return (
        <>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h4 className="heading1">Items</h4>
                <div className="row">

                    <div className="container">
                        {loading ? (<LoadingCard count={3} />) :
                            <div className="row">{services.map((p) => (
                                <div className="col-md-4 pb-3" key={p.brand}>
                                    <Showitems service={p} />
                                </div>
                            ))}
                            </div>

                        }
                    </div>
                </div>

                <h4 className="heading1">Services</h4>
                <div className="row">

                    <div className="container">
                        {loading ? (<LoadingCard count={3} />) :
                            <div className="row">{servicehome.map((p) => (
                                <div className="col-md-4 pb-3" key={p.brand}>
                                    <ViewServiceCard service={p} />
                                </div>
                            ))}
                            </div>

                        }
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Homeitems
