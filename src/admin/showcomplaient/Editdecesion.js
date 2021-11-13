import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../../Firebase";
import Adminnav from "../Adminnav";
const initialState={
  c_id:'',
  decision:'',
  price:'',
  status:'',
}
const Editdecesion = () => {
  const id = useParams();
  const num=JSON.stringify(id);
  const num2=num.split(':')[1]
  const num3=num2.split('}')[0].replace(/["]+/g, '')
  
  const [values, setValues] = useState(initialState);
  // const [deces, setdeces] = useState(det.decision);
  useEffect(() => {
    Retrive();
  }, []);
  let history = useHistory();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const Retrive = async () => {
    console.log(",id  is  here",(num3))
    try{
      await db
        .collection('compdetail')
        // .where('uid', '==', user.email)
        .doc(num3)
        .get()
        .then(doc => {
          if (doc && doc.exists) {
            setValues(doc.data());
            console.log("This is doc", doc.data());
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

  const onhandle = async (e) => {
    e.preventDefault();
    // setdeces(e.target.value);

    await db
      .collection("compdetail")
      .doc(num3)
      .update({
        price: values.price,
        status: values.status,
      }) .then(() => {
        alert("Changes recorded");
        history.push("/admin/complaient")
      })
      .catch((err) => {
        console.log(err);
        alert("Changes recorded failed");
        window.location.reload();

        // alert(err.response.data.err);
      });
  };

  return (

    <>
    {/* {console.log("This is doc", values)} */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Adminnav />
          </div>
          <div className="col-md-10">
            <br />

            <form onSubmit={onhandle}>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  value={values.price}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  name="status"
                  className="form-control"
                  value={values.status}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" style={{marginTop: '15px',borderRadius:"10px",transition:".4s ease all"}} className=" btn-outline-info" >Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editdecesion;
