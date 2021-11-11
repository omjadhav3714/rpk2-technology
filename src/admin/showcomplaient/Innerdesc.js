
import React from 'react'
import { Link } from "react-router-dom";
import '../../admin/Singlecard.css';

function Innerdesc({ item1 }) {
    // const {
    //     brand,
    //     description,
    //     price,

    // } = item1;
    
    return (
        <>
        <div>
        <ul className="list-group">
        <li className="list-group-item">
                Name:&nbsp; {" "}
                <span className="label label-default label-pill pull-xs-left">
                    <b> {item1.name}</b>
                </span>
            </li>
        <li className="list-group-item">
                Email:&nbsp; {" "}
                <span className="label label-default label-pill pull-xs-left">
                    <b> {item1.email}</b>
                </span>
            </li>
            <li className="list-group-item">
                Brand:&nbsp; {" "}
                <span className="label label-default label-pill pull-xs-left">
                    <b> {item1.brand}</b>
                </span>
            </li>



            <li className="list-group-item">
            Desc: &nbsp;{" "}
                <span className="label label-default label-pill pull-xs-left">
                <b> {item1.description}</b>
                </span>
            </li>
        </ul>
        {console.log("descri",item1.description)}
        </div>
        </>
    )
}

export default Innerdesc
