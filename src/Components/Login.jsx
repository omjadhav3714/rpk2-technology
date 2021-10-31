import { faEye } from "@fortawesome/free-solid-svg-icons";
import firebase from 'firebase/compat/app';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'antd';
import { GoogleOutlined, MailOutlined } from '@ant-design/icons';
import { Link,useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { auth, googleAuthProvider,app,db } from "../Firebase";
import { useDispatch, useSelector } from 'react-redux';
import './login.css';
const eye = <FontAwesomeIcon icon={faEye} />
const Login=()=>{
  var medName;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role1, setrole] = useState([]);
  const [passwordShown, setPasswordShown] = useState(false);

  var separatedString;
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };



  const { user } = useSelector((state) => ({ ...state }));
  
let dispatch = useDispatch();
let history = useHistory();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    

  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const idTokenResult = await user.getIdTokenResult()
    await db.collection('users')
    // .where('uid', '==', user.email)
    .doc(user.email)
   .get()
   .then(doc => {
      if (doc && doc.exists) {
          separatedString = doc.data();
         //use separatedString
      }
   }).catch((error) => {
        console.log(error);
      });
  
  
  // var obj=JSON.stringify(separatedString.role);
  // const ad= obj.localeCompare("admin")===0?"admin":"user";
//   var ad;
//   if(obj=="admin"){
//     ad=1;
//   }
// console.log("one is herw",ad)



    await db.collection('users')
    // .where('uid', '==', user.email)
    .doc(user.email)
   .get()
   .then(async doc => {
      if (separatedString.email!=user.email) {
      await db.collection("users").doc(user.email).set({
        
        name: user.email.split('@')[0],
         role: "user",
        email: user.email,
      })
      
      // history.push("/");
      console.log("hello",user);
    }
    dispatch({
      type: "LOGGED_IN_USER2",
      payload: {
        name: user.email.split("@")[0],
        email: user.email,
        token: idTokenResult.token,
        role: separatedString.role,
        id: user.email,
      },
    });
    alert("successfully login");
  }).catch((error) => {
    console.log(error);
  });

    
  }
  
  catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async () => {
  try {
    await db.collection('users')
    // .where('uid', '==', user.email)
    .doc(email)
   .get()
   .then(doc => {
      if (doc && doc.exists) {
          separatedString = doc.data();
         //use separatedString
      }
   }).catch((error) => {
        console.log(error);
      });
      var obj=JSON.stringify(separatedString.role);
      console.log("obj us hee",obj)
      const ad="";
      
     
      

      console.log("ad is here",ad)
     
    await auth.signInWithEmailAndPassword(email, password).then((res) => {
      
      dispatch({
        type: "LOGGED_IN_USER2",
        payload: {
          name:email.split("@")[0],
          email: email,
          // token: idTokenResult.token,
          role: obj,
          id: email,
        },
      });
    });
    alert("successfully login");
    history.push("/");
  
  } catch (err) {
    console.error(err);
    alert("could'nt login");
  }
  
};   

const LoginForm = () => (
      <form onSubmit={signInWithEmailAndPassword} class="form">
        <label for="user-email" style={{ paddingTop: '13px' }}>
          &nbsp;Email
        </label>
        <input id="user-email" class="form-content" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
        <div class="form-border"></div>
        <label for="user-password" style={{ paddingTop: '22px' }}>&nbsp;Password
        </label>
        <div className="flex">
          <input id="user-password" class="form-content" name="password" value={password} onChange={e => setPassword(e.target.value)} type={passwordShown ? "text" : "password"}
          /> <i style={{
            marginLeft: 'auto'
          }} onClick={togglePasswordVisiblity}>  {eye}</i>
        </div>
        <div class="form-border"></div>
        {/* <Link to="/forgot/password" id="signup" >
  
          <legend id="forgot-pass">Forgot password?</legend>
        </Link> */}
        <Button id="submit-btn" onClick={signInWithEmailAndPassword} type="primary" className="mb-3" block shape="round" icon={<MailOutlined />} size="large">
        &nbsp;Login
        </Button>
        <div>
          <span className="sig">Don't have an account? </span> &nbsp;
          <Link to="/signup" id="signup" >
            Register
          </Link>
        </div>
      </form>
    );
      return(

    <>
 <div id="card">
        <div id="card-content">
          <div id="card-title">
           <h3>Login</h3>
            <div class="underline-title"></div>
          </div>
          {LoginForm()}
          <Button  onClick={signInWithGoogle} type="danger" className="bt1 mb-3" block shape="round" icon={<GoogleOutlined />} size="large">
            &nbsp;Login with Google
          </Button>
        </div>
      </div>
    </>    
  );
};
export default Login