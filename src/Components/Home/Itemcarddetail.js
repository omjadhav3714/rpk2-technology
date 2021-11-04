
import React from 'react'
import { Link } from "react-router-dom";
import './../../admin/Singlecard.css';

function Itemcarddetail({ item1 }) {
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
                Brand:&nbsp; {" "}
                <span className="label label-default label-pill pull-xs-left">
                    <b> {item1.brand}</b>
                </span>
            </li>
{/* 
            {category && (
                <li className="list-group-item">
                    Category{" "}
                    <Link
                        to={`/category/${category.slug}`}
                        className="label label-default label-pill pull-xs-right"
                    >
                        {category.name}
                    </Link>
                </li>
            )} */}

            {/* {subs && (
                <li className="list-group-item">
                    Sub Categories
                    {subs.map((s) => (
                        <Link
                            key={s._id}
                            to={`/sub/${s.slug}`}
                            className="label label-default label-pill pull-xs-right"
                        >
                            {s.name}
                        </Link>
                    ))}
                </li>
            )} */}

            {/* <li className="list-group-item">
                Available{" "}
                <span className="label label-default label-pill pull-xs-right">
                    {shipping}
                </span>
            </li> */}

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
        {console.log("descri",item1.description)}
        </div>
        </>
    )
}

export default Itemcarddetail
