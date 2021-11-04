import { useParams } from "react-router";
import { Link,useHistory } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Adminnav from './../../admin/Adminnav';
import './../../admin/tables.css';
import './../../admin/adminnav.css';
import { db } from "../../Firebase";
// import Itemserviceform from './Itemserviceform';
import Uploadfile from './../../admin/Uploadfile';
import Edititemform from './Edititemform';
import Uploadedit from "./Uplaodedit";
const initialState = {
  brand: '',
  // title: '',
  description: '',  
  price: '',
  image: [],
};

const Edititem = () => {
    const {id}=useParams();
    const { user } = useSelector((state) => ({ ...state }));
    const [loading, setLoading] = useState(false);
  const [values, setValues] = useState(initialState);
  let history = useHistory();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  useEffect(() => {
    retrive();
  }, []);
const retrive=async()=>{
    try{
        await db.collection('items')
        // .where('uid', '==', user.email)
        .doc(id)
       .get()
       .then(doc => {
          if (doc && doc.exists) {
             setValues( doc.data());
              console.log("This is doc",doc.data())
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

  const handleSubmit = async(e) => {
      
    e.preventDefault();
    await db.collection("items").doc(id).update({
          
    //   brand: values.brand,
       description: values.description,
      price: values.price,
      image:values.image,
    })
        .then((res) => {
            console.log(res);
            window.alert(`"${res.data.brand}" is created`);
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
            alert("Item Updated")
            window.location.reload();
            history.push("/");
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
                        <Uploadedit
                            values={values}
                            setValues={setValues}
                            setLoading={setLoading}
                        />
                    </div>

                    <Edititemform
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

export default Edititem
