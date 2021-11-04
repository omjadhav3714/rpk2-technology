import React, { useEffect, useState } from 'react'
import { Pagination } from 'antd';
import LoadingCard from './Loadingcard';
import { db } from '../../Firebase';
import Showitems from '../../admin/Showitems';
import './../../admin/Singlecard.css';
function Homeitems() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [servicesCount, setServicesCount] = useState(0);


    useEffect(() => {
        loadAllServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    // useEffect(() => {
    //     getServicesCount()
    //         .then((res) => setServicesCount(res.data));
    // }, []);

    const loadAllServices = async() => {
        
        setLoading(true);
        // getServices("price", "desc", page)
   const items=     await db.collection('items')
    // .where('uid', '==', user.email)
    // .doc()
   .get()
     .then(querySnapshot => {
        querySnapshot.forEach(element => {
            var data = element.data();
            setServices(arr => [...arr , data]);
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
                  <Showitems service={p}  />
                </div>
                ))}
                </div>

}
</div>               
{/* <div className="col-md-4 offset-md-4 text-center pt-5 p-3 ">
                   <Pagination
                    current={page}
                    total={(servicesCount / 3) * 10}
                    onChange={(value) => setPage(value)}
                />
                </div> */}
                </div>
        </>
    )
}

export default Homeitems
