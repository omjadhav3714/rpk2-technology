import { useSelector } from 'react-redux';
import React, { useEffect, useState,createContext } from 'react'
import { db } from '../../../Firebase';
import Clientnav from './Clientnav'
import Showcomplaient from './Showcomplaient'


const Complaientview = () => {
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
   const items=     await db.collection('complaient').doc(user.email)
    // .where('uid', '==', user.email)
    // .doc()
   .get()
     .then(doc => {
      if (doc && doc.exists) {
        
            setServices(arr => [...arr , doc.data()]);
            console.log("this is der",services)
       //use separatedString
    }  
      // querySnapshot.forEach(element => {
      //       var data = element.data();
      //       setServices(arr => [...arr , data]);
      //   });
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
            {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4 className="heading">Complainet</h4>)}
            
            <div className="row">
              {services.map((p) => (

              <div style={{gap:"2vw" ,display:"flex",flexWrap:"wrap",justifyContent:"center"}} className="md-4 pb-3" key={p.brand}>
                {p.comp.map((h) => (
                  <div key={h.name}>
                     
                <Showcomplaient service={h} co={p.comp}  />
                
                 {console.log("this is p",p.comp)}
                 {console.log("this is p",h._id)}
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

export default Complaientview

