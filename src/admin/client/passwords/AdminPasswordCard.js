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

    const { p_id, model, password } = passwordData;


    const handleRemove = async () => {
        if (window.confirm("Are you sure want to delete this item?")) {
            try {
                await db.collection('passwords')
                    // .where('uid', '==', user.email)
                    .doc(p_id)
                    .delete().then(() => {
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                window.location.reload()

            } catch (err) {
                console.error(err);
                alert(err.message);
            }
        }
    };


    return (
        <>
            <Card
                actions={[
                    <>
                        {<Button onClick={() => { handleRemove(model); console.log(model) }} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">
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
