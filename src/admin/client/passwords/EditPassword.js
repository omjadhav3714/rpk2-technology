/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import './../../tables.css';
import './../../adminnav.css';
import { db } from '../../../Firebase';
import EditPasswordForm from './EditPasswordForm';

const initialState = {
    model: '',
    password: '',
};

const EditPassword = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialState);
    let history = useHistory();
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        retrive();
    }, []);

    const retrive = async () => {
        try {
            await db.collection('passwords')
                .doc(id)
                .get()
                .then(doc => {
                    if (doc && doc.exists) {
                        setValues(doc.data());
                    }
                })
                .catch((error) => {
                    console.log(error);
                });


        } catch (err) {
            alert(err.message);
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        await db.collection("passwords").doc(id).update({

            model: values.model,
            password: values.password,
        })
            .then((res) => {
                console.log(res);
                window.alert(`"${res.data.model}" password updated`);
                window.location.reload();
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
                alert("Item Updated")
                window.location.reload();

            });
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <br />
                        {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Update Password</h4>)}
                        <hr />
                        <EditPasswordForm
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
}

export default EditPassword
