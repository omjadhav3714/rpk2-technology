/* eslint-disable array-callback-return */
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './../../Singlecard.css';
import { db } from '../../../Firebase';
const { Meta } = Card;

const AdminPasswordCard = ({ passwordData }) => {

    const {  model, password,p_id } = passwordData;


    const handleRemove = async (id) => {
        if (window.confirm("Are you sure want to delete this item?")) {
            
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
                

            } 
        
    };


    return (
        <>
        {console.log(typeof(passwordData.p_id))}
            <Card
                actions={[
                    <>
                        {<Button onClick={() =>  handleRemove(p_id.toString()) } type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">
                        </Button>}

                        {<Link to={`/admin/editpassword/${p_id}`}><EditOutlined type="primary" className="mb-3 custom1" block shape="round" size="small" /></Link>}
                    </>
                ]}
            >
                <Meta
                    title={model}
                    description={password}
                />
            </Card>

        </>
    )
}

export default AdminPasswordCard
