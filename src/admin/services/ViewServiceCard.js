/* eslint-disable array-callback-return */
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { Card } from 'antd';
import laptop from '../../Images/login.png';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../Singlecard.css';
import { db } from '../../Firebase';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const cloudinary = require('cloudinary/lib/cloudinary');

const { Meta } = Card;

const ViewServiceCard = ({ service }) => {
    const { sname, image, s_id } = service;
    const { user } = useSelector((state) => ({ ...state }));
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();

    const handleRemove = async (id) => {
        if (window.confirm("Are you sure want to delete this service?")) {
            try {
                await db.collection('services')
                    // .where('uid', '==', user.email)
                    .doc(id)
                    .delete().then(() => {

                        image.map((image1) => {
                            var image_id = image1.public_id;
                            cloudinary.uploader.destroy(image_id, (err, result) => {
                                if (err) return
                                // alert( err );
                                alert("ok");
                            })
                        })


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

    const handleSubmit = () => {
        
    }

    return (
        <>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >

                <Card
                    cover={
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img
                            src={image && image.length ? image[0].url : laptop}
                            style={{ maxHeight: "32vh", marginLeft: "auto", marginRight: "auto", padding: "5px", objectFit: "contain" }}
                            className="p-1"
                        />
                    }
                    actions={[
                        <>

                            {user && (user.role === 'admin' && <Button onClick={() => { handleRemove(s_id.toString()); }} type="danger" className="mb-3 custom" block shape="round" icon={<DeleteOutlined />} size="small">

                            </Button>)}

                            {user && (user.role === 'admin' && <Link to={`/admin/editservice/${s_id}`}><EditOutlined type="primary" className="mb-3 custom1" block shape="round" size="small" /></Link>

                            )}
                            {user && (<button className="btn btn-primary" onClick={() => setOpen(true)} style={{ float: "right" }}>Get now</button>)}
                        </>
                        //   <DeleteOutlined onClick={() => handleRemove(slug)} className="text-danger" />,
                    ]}
                >
                    {/* <hr/> */}
                    <Meta
                        title={sname}
                    />
                </Card>
                <Modal open={open} center onClose={() => setOpen(false)}
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                    <textarea
                        type="text"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                        className="form-control"
                        placeholder="Enter Your Address"
                        required
                    ></textarea>
                    <br />
                    <input
                        onChange={(e) => {
                            setContact(e.target.value);
                        }}
                        value={contact}
                        type="text"
                        className="form-control"
                        placeholder="Enter your contact no"
                        required
                    />
                    <br />
                    <button onClick={handleSubmit} disabled={!address || !contact} className="btn btn-primary mt-2">Place Request</button>
                </Modal>
            </motion.div>
        </>
    )
};

export default ViewServiceCard;
