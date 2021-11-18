/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './tables.css';
import './adminnav.css';
import Adminnav from './Adminnav';
import { useParams } from "react-router";
import { db } from '../Firebase';
const initialState = {
  name: '',
  email: '',
  role: ''

};
const Changerole = () => {
  const { id } = useParams();
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    retrive();
  }, []);
  let history = useHistory();
  const retrive = async () => {
    try {
      console.log(",id  is  here", (id))
      await db.collection('users')
        // .where('uid', '==', user.email)
        .doc(id)
        .get()
        .then(doc => {
          if (doc && doc.exists) {
            setValues(doc.data());
            console.log("This is doc", doc.data())
            //   setrole(values.role)
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
    await db.collection('users')
      // .where('uid', '==', user.email)
      .doc(values.email)
      .update({
        //    email:values.email,
        name: values.name,
        role: values.role,
      }).then(() => {

        alert("Successully change done");
        history.push('/');        //   window.location.reload();   
      })
      .catch((err) => {
        console.log(err);
        alert("user Updated")
        // window.location.reload();

        // alert(err.response.data.err);
      })

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" className="form-control" value={values.name} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="text" name="email1" className="form-control" value={values.email} />
              </div>

              <div className="form-group">
                <label>role</label>
                {/* <input type="text" name="role" className="form-control" value={values.role} onChange={(e) => setrole(e.target.value)} /> */}&nbsp;&nbsp;
                <select style={{ borderRadius: "7px", width: "10vw", textAlign: "center", paddingLeft: "2px", paddingRight: "2px" }} onChange={handleChange} name="role" value={values.role}>

                  <option value={values.role}>{values.role}</option>

                  {values.role === "user" || values.role === 'admin' ? (<option value="client">client</option>) : (<option value="admin">admin</option>)}
                </select>
              </div>
              <button type="submit" style={{ marginTop: '15px', borderRadius: "10px", transition: ".4s ease all" }} className=" btn-outline-info" >Save</button>



            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Changerole
