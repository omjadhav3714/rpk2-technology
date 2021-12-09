/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import LoadingCard from './Loadingcard';
import { db } from '../../Firebase';
import { motion } from "framer-motion";
import Showitems from '../../admin/Showitems';
import './../../admin/Singlecard.css';
function Homeitems() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setsearch] = useState('');
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

let datasearch=services.filter(item=>{
return Object.keys(item).some(key=>item[key].toString().toLowerCase().includes(search.toString().toLowerCase()))
})
    return (
        <>
          <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
            <h4 className="heading1">Items</h4>
            <div className="search">
            <form onsubmit="event.preventDefault();" className="ser">
            <input id="search"  type="search" placeholder="search " value={search} onChange={e => setsearch(e.target.value)} />
            <button type="button">Go</button> 
            </form>
            </div>
            <div className="row">

                <div className="container">
                    {loading ? (<LoadingCard count={3} />) :
                        <div className="row">{datasearch.map((p) => (
                            <div className="col-md-4 pb-3" key={p.brand}>
                                <Showitems service={p} />
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
