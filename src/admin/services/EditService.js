/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import Adminnav from "../Adminnav";
import '../tables.css';
import '../adminnav.css';
import { db } from "../../Firebase";
import UpdateServiceImage from "./UpdateServiceImage";
import EditServiceForm from "./EditServiceForm";

const initialState = {
    sname: '',
    image: [],
};

const EditService = () => {
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
            await db.collection('services')
                // .where('uid', '==', user.email)
                .doc(id)
                .get()
                .then(doc => {
                    if (doc && doc.exists) {
                        setValues(doc.data());
                        console.log("This is doc", doc.data())
                        //use separatedString
                    }
                })
                .catch((error) => {
                    console.log(error);
                });


        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        await db.collection("services").doc(id).update({

            //   brand: values.brand,
            sname: values.sname,
            image: values.image,
        })
            .then((res) => {
                console.log(res);
                window.alert(`"${res.data.sname}" is updated`);
                window.location.reload();
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
                alert("Service Updated")
                window.location.reload();

                // alert(err.response.data.err);
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
                        {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Update Service</h4>)}
                        <hr />
                        <div className="p-3">
                            <UpdateServiceImage
                                values={values}
                                setValues={setValues}
                                setLoading={setLoading}
                            />
                        </div>

                        <EditServiceForm
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

export default EditService
