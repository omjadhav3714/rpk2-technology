/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import Clientnav from '../complaient/Clientnav';
import { Card } from 'antd';
import './password.css';
import PasswordCard from './PasswordCard';

const ShowPasswords = () => {
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
        const items = await db.collection('passwords')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(element => {
                    var data = element.data();
                    if (data.email === user.email) {
                        setServices(arr => [...arr, data]);
                        console.log(services)
                    }
                });
                setLoading(false);
            });
    };


    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <Clientnav />
                </div>
                <div className="col">
                    {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4 className="heading">Saved Passwords</h4>)}

                    <div className="row">
                        {services.map((p) => (
                            <div key={p.p_id}>
                                <PasswordCard passwordData={p} />
                                {console.log("data",p)}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>

    )
}

export default ShowPasswords

