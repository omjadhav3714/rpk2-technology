import React from 'react'
import './../../admin/Singlecard.css';

function Itemcarddetail({ item1 }) {


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
        </>
    )
}

export default Itemcarddetail
