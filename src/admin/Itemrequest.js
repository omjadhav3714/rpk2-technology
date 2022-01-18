import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import ItemReqCard from './showcomplaient/ItemReqCard';
import { db } from '../Firebase';

const Itemrequest = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    useEffect(() => {
        loadAllServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const loadAllServices = async () => {
        setLoading(true);
         await db.collection('itemRequest')
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
        }
    return (
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Adminnav />
          </div>
          <div className="col">
                    {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4 className="heading">Item Request</h4>)}

                    <div className="row-wrap">
                        {services.map((p) => (
                            <div key={p.p_id}>
                                <ItemReqCard ItemData={p} />
                                {console.log("data",p)}
                            </div>
                        ))}
                    </div>

                </div>

          </div>
          </div>
          </>
    )
}

export default Itemrequest
