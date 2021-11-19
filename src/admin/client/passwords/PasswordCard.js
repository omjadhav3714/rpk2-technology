/* eslint-disable array-callback-return */
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './../../Singlecard.css';
import { db } from '../../../Firebase';
import './password.css';

const PasswordCard = ({ passwordData }) => {

    const { name,model, password, p_id } = passwordData;


    const handleRemove = async (id) => {
        if (window.confirm("Are you sure want to delete this item?")) {
            try {
                await db.collection('passwords')
                    // .where('uid', '==', user.email)
                    .doc(id)
                    .delete().then(() => {
                        // console.log("Image is here")
                        window.location.reload()
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                console.log(passwordData)
                // window.location.reload()

            } catch (err) {
                console.error(err);
                alert(err.message);
            }
        }
    };


    return (
        <>
            {console.log(passwordData)}
            {/* <Card
                actions={[
                    <>
                        {<Button onClick={() =>  handleRemove(p_id.toString())} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">

                        </Button>}

                        {<Link to={`/client/editpassword/${p_id}`}><EditOutlined type="primary" className="mb-3 custom1" block shape="round" size="small" /></Link>}
                    </>
                ]}
            > */}
            {/* <hr/> */}
            {/* <Meta
                    title={model}
                    description={password}
                />
            </Card> */}
            <div className="row3">
                <div className="box">
                    <div className="tit">
                    <span><strong>Name: </strong>{name}</span><br />
                    
                        <span><strong>Model: </strong>{model}</span><br />
                        <span><strong>Password:</strong> {password}</span>
                    </div>

                    {<Button onClick={() => handleRemove(p_id.toString())} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">
                    </Button>}

                    {<Link to={`/client/editpassword/${p_id}`}><EditOutlined type="primary" className="mb-3 custom1" block shape="round" size="small" /></Link>}
                </div>
            </div>
        </>
    )
}

export default PasswordCard
