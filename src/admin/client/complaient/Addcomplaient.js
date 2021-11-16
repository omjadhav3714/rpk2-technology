
import Clientnav from './Clientnav'
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
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
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const min = 1;
    const max = 100000000000;
    const rand = min + Math.random() * (max - min);
    var price = 0;
    var num = parseInt(rand);
    var arr = {

      brand: values.brands,
      description: values.description,
      image: values.images,
      email: user.email,
      name: user.name,
      c_id: parseInt(rand),
    }

    await db.collection("complaient").doc(user.email).set({
      "comp": firebase.firestore.FieldValue.arrayUnion(arr),
    },

      { merge: true }

      // set(true)
    ).then(async doc => {
      await db.collection("compdetail").doc(num.toString()).set({
        c_id: parseInt(rand),
        price: price,
        decision: 'disagree',
        status: 'not viwed',

      })

      alert("Complainet added")
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
            {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Add Complaint</h4>)}
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
