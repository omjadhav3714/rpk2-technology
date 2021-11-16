/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import LoadingCard from './Loadingcard';
import { db } from '../../Firebase';
import Showitems from '../../admin/Showitems';
import './../../admin/Singlecard.css';
function Homeitems() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    useEffect(() => {
        loadAllServices();
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

    return (
        <>
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
        </>
    )
}

export default Homeitems
