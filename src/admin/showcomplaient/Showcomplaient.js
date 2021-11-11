import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import '../Singlecard.css';

import Showcomplaient from './Showcomplaient'
import Complaientcard from './Complaientcard';
import Adminnav from '../Adminnav';
import { db } from '../../Firebase';

const Showclientcomplaient = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [servicesCount, setServicesCount] = useState(0);

    const { user } = useSelector((state) => ({ ...state }));
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
   const items=     await db.collection('complaient')
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
        <div className="row">
          <div className="col-md-2">
            <Adminnav />
          </div>
          <div className="col">
            {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4 className="heading">Complainet's</h4>)}
            <div className="row">
                {services.map((p) => (
              <div style={{gap:"2vw" ,display:"flex",flexWrap:"wrap",justifyContent:"center"}} className="au md-4 pb-3" key={p.brand}>
                {p.comp.map((h) => (
                  <div key={p.name} >
                <Complaientcard service={h} co={p.comp}    />
                {console.log("this is hello worls",p.comp)}
                 
                </div>
                ))}
                </div>
              
            ))}
            </div>
          </div>

        </div>
        </>

    )
}

export default Showclientcomplaient
