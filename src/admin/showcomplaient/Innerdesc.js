import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import React from 'react'
import { Link } from "react-router-dom";
import '../../admin/Singlecard.css';

function Innerdesc({ item1 ,det}) {
    // const {
    //     brand,
    //     description,
    //     price,

    // } = item1;
    const { user } = useSelector((state) => ({ ...state }));
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
            <li className="list-group-item">
            Price: &nbsp;{" "}
                <span className="label label-default label-pill pull-xs-left">
                <b> {det.price}</b>
                </span>
            </li>
            
            <li className="list-group-item">
            Decesion: &nbsp;{" "}
                <span className="label label-default label-pill pull-xs-left">
                <b> {det.decision}</b>
                </span>
            </li>
            
            <li className="list-group-item">
            Status: &nbsp;{" "}
                <span className="label label-default label-pill pull-xs-left">
                <b> {det.status}</b>
                </span>
               
            </li>
            <div style={{display: 'flex',
    justifyContent: 'end',
    paddingRight: '23px',
}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user&&(user.role === 'admin' && <Link to={`/admin/changedecesion/${det.c_id}`}><EditOutlined  type="primary" className="mb-3 custom1" block shape="round"  size="small"/></Link>
                        
                        )}
                        </div>
        </ul>
        {console.log("descri",item1.description)}
        </div>
        </>
    )
}

export default Innerdesc
