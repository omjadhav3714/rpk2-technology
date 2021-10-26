import React from "react";

function Signup(){
      return(
        <div className="test">
        <div id="Sign-Upform">
          <FormHeader title="Sign-Up" />
          <Form />
          <OtherMethods />
        </div></div>
      )
    }
  const FormHeader = props => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form = props => (
     <div>
       <FormInput description="Name" placeholder="Enter your Name" type="text" />
       <FormInput description="Email" placeholder="Enter your Email" type="email" />
       <FormInput description="Password" placeholder="Enter your password" type="password"/>
       <FormButton title="Sign up"/>
     </div>
  );
  
  const FormButton = props => (
    <div id="button" class="rowl">
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div class="rowl">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  
  const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Or sign in with:</label>
      <div id="iconGroup">
      <a href="#" id="facebookIcon"></a>
      <a href="#" id="googleIcon"></a>
      </div>
    </div>
  );
  
export default Signup;