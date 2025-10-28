import React, { useContext } from 'react'
import './Login.css';
import { useState } from 'react';
import axios from "axios";
import { Storecontext } from "../../context/Store";
import { assets } from '../../assets/frontend_assets/assets';
const Login = ({setshowlogin}) => {
    const [currentstate,setcurrent]=useState("Login");

const {url,settoken,setcartitem}=useContext(Storecontext);

    const [data,setdata]=useState({email:"",
      name:"",
      password:""
    }); 
const cnghandler=(event)=>{
const name=event.target.name;
const value=event.target.value;
setdata((prev)=>({...prev,[name]:value}));
}


const onlogin =async(event)=>{
event.preventDefault();
let newurl=url;
if(currentstate=="Login")
{
  newurl+="/api/user/login";
}
else
  {newurl+="/api/user/register"
}
console.log('dvnhdby');
const response=await axios.post(newurl,data);
console.log(response);
if(response.data.success)
{
settoken(response.data.token);
localStorage.setItem("token",response.data.token);
if(currentstate=="Login")
  setcartitem(response.data.cartdata);
setshowlogin(false);
}
else
{
  alert(response.data.message);
}

}


  return (
    <div className="login">
      <form className="login-container" onSubmit={onlogin} >
        <div className="login-title">
          <h3>{currentstate}</h3>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-inputs">
          {currentstate == "Signup" ? (
            <input name='name' onChange={cnghandler} value={data.name} type="text" placeholder="Your name" required />
          ) : (
            <></>
          )}
          <input name='email' value={data.email} onChange={cnghandler} type="email" placeholder="Your email" required />
          <input name='password' value={data.password} onChange={cnghandler} type="password" placeholder="password" required />
        </div>
        <button type='submit' >{currentstate == "Signup" ? "Create account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentstate == "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrent("Signup")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrent("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login