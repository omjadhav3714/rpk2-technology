import Clientnav from './Clientnav'
import { Link,useHistory } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import '../../tables.css';
import '../../adminnav.css';
import { db } from '../../../Firebase';
import firebase from 'firebase/compat/app';
import UploadComp from './UploadComp';
import Complaientform from './Complaientform';

const initialState = {
  brands: '',
  
  description: '',  
  
  images: [],
};

const Addcomplaient = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);
  let history = useHistory();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    await db.collection("complaient").doc(user.email).set({
        brand: values.brands,
       description: values.description,
      image:values.images,    
      
      
    })
        .then((res) => {
            console.log(res);
            window.alert(`"${res.data.brands}" is created`);
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
            alert("Complainet added")
            window.location.reload();
            // alert(err.response.data.err);
        });
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
                    {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Service Create</h4>)}
                    <hr />
                    <div className="p-3">
                        <UploadComp
                            values={values}
                            setValues={setValues}
                            setLoading={setLoading}
                        />
                    </div>

                    <Complaientform
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

export default Addcomplaient
