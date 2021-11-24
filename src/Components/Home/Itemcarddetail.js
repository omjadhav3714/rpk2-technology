import React from 'react'
import './../../admin/Singlecard.css';
import { motion } from "framer-motion";
function Itemcarddetail({ item1 }) {


    return (
        <>
        <motion.div
       
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Brand:&nbsp; {" "}
                        <span className="label label-default label-pill pull-xs-left">
                            <b> {item1.brand}</b>
                        </span>
                    </li>

                    <li className="list-group-item">
                        Price:&nbsp; {"  "}
                        <span className="label label-default label-pill pull-xs-left">
                            <b>{item1.price} Rs</b>
                        </span>
                    </li>

                    <li className="list-group-item">
                        Desc: &nbsp;{" "}
                        <span className="label label-default label-pill pull-xs-left">
                            <b> {item1.description}</b>
                        </span>
                    </li>
                </ul>
                {console.log("descri", item1.description)}
            </div>
            </motion.div>
        </>
    )
}

export default Itemcarddetail
