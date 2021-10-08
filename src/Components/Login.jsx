import React from "react";

function Login(){
      return(
        <div className="test">
        <div id="loginform">
          <FormHeader title="Login" />
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
       <FormInput description="Username" placeholder="Enter your username" type="text" />
       <FormInput description="Password" placeholder="Enter your password" type="password"/>
       <FormButton title="Log in"/>
     </div>
  );
  
  const FormButton = props => (
    <div id="button" class="row">
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div class="row">
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
  
export default Login;