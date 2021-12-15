import { LoadingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Adminnav from '../Adminnav';
import { db } from '../../Firebase';
import '../tables.css';
import '../adminnav.css';
import AddServiceForm from './AddServiceForm';
import UploadServiceImage from './UploadServiceImage';

const initialState = {
    sname: '',
    images: [],
    s_id: '',
};

const AddService = () => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const min = 1;
        const max = 100000000000;
        const rand = min + Math.random() * (max - min);
        await db.collection("services").doc(parseInt(rand).toString()).set({
            sname: values.sname,
            image: values.images,
            s_id: parseInt(rand),
        })
            .then((res) => {
                console.log(res);
                window.alert(`"${res.data.brands}" is created`);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
                alert("Service added")
                window.location.reload();
            });
    };


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Adminnav />
                    </div>
                    <div className="col-md-10">
                        <br />
                        {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Add Service</h4>)}
                        <hr />
                        <div className="p-3">
                            <UploadServiceImage
                                values={values}
                                setValues={setValues}
                                setLoading={setLoading}
                            />
                        </div>

                        <AddServiceForm
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            setValues={setValues}
                            values={values}

                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default AddService;
