
import Clientnav from '../complaient/Clientnav';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import '../../tables.css';
import '../../adminnav.css';
import { db } from '../../../Firebase';
import PasswordForm from './PasswordForm';

const initialState = {
    model: '',
    password: '',
};

const SavePasswords = () => {
    const { user } = useSelector((state) => ({ ...state }));
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

        await db.collection("passwords").doc(parseInt(rand).toString()).set({
            model: values.model,
            password: values.password,
            email: user.email,
            name: user.name,
            p_id: parseInt(rand),
        }).then(async doc => {
            setLoading(false);
            alert("Password added")
            window.location.reload();

        })
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Clientnav />
                    </div>
                    <div className="col-md-10">
                        <br />
                        {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Save Password</h4>)}
                        <hr />


                        <PasswordForm
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

export default SavePasswords
