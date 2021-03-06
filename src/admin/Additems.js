import { LoadingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Adminnav from './Adminnav';
import './tables.css';
import './adminnav.css';
import { db } from "../Firebase";
import Itemserviceform from './Itemserviceform';
import Uploadfile from './Uploadfile';
const initialState = {
  brands: '',
  // title: '',
  description: '',
  price: '',
  images: [],
  catogery:"Catogery 1",
  subcatogery:"Sub-Catogery 1",
};
const Additems = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection("items").doc(values.brands).set({

      brand: values.brands,
      description: values.description,
      price: values.price,
      image: values.images,
      catogery:values.catogery,
      subcatogery:values.subcatogery,
    })
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.brands}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Item added")
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
            {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Service Create</h4>)}
            <hr />
            <div className="p-3">
              <Uploadfile
                values={values}
                setValues={setValues}
                setLoading={setLoading}
              />
            </div>

            <Itemserviceform
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

export default Additems
