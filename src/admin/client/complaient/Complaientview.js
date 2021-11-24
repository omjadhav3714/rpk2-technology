/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import Clientnav from './Clientnav'
import Showcomplaient from './Showcomplaient'


const Complaientview = () => {
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
    const items = await db.collection('complaient').doc(user.email)
      .get()
      .then(doc => {
        if (doc && doc.exists) {
          setServices(arr => [...arr, doc.data()]);
          console.log("this is der", services)
        }
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
          <Clientnav />
        </div>
        <div className="col">
          {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4 className="heading">Complainet</h4>)}

          <div className="row">
            {services.map((p) => (

              <div style={{ gap: "2vw", display: "flex", flexWrap: "wrap", justifyContent: "center" }} className="md-4 pb-3" key={p.brand}>
                {p.comp.map((h) => (
                  <div key={h.name}>

                    <Showcomplaient service={h} co={p.comp} />

                    {console.log("this is p", p.comp)}
                    {console.log("this is p", h._id)}
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>

      </div>
      </motion.div>
    </>

  )
}

export default Complaientview

