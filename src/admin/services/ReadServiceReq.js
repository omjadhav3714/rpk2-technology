import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'


import '../client/passwords/password.css';
import Adminnav from '../Adminnav'
import { db } from '../../Firebase';
import ServiceReqCard from './ServiceReqCard';

const ReadServiceReq = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        loadAllServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const loadAllServices = async () => {
        setLoading(true);
        const items = await db.collection('servicesRequest')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(element => {
                    var data = element.data();
                    // if (data.email === user.email) {
                        setServices(arr => [...arr, data]);
                        console.log(services)
                    // }
                });
                setLoading(false);
            });
    };
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Adminnav />
                </div>
                <div className="col">
                    {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4 className="heading">Service Request</h4>)}

                    <div className="row-wrap">
                        {services.map((p) => (
                            <div key={p.p_id}>
                                <ServiceReqCard ServiceData={p} />
                                {console.log("data",p)}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ReadServiceReq
