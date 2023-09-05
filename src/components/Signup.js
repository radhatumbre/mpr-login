import LoginImage from "../components/images/LoginImg.png"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

  return (
    <div className="login-wrapper">
    <div className="login-container">
      <div className="login-left">
        <img
          src={LoginImage} // Replace with your image URL
          alt="Login"
          className="login-image"
        />
      </div>
      <div className="login-right">
        <h1>Sign Up</h1>
        <p>Creating a new account</p>
        <form action="POST">
        <div className="form-group">
          <input type="name"  placeholder="Name"  />
          </div>
          <div className="form-group">
          <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
          </div>
          <div className="form-group">
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />


          </div>
          <div className="form-group">
            <button type="submit" onClick={submit}>Sign Up</button>
          </div>
        </form>
        <p>Already have an account? <Link to="../">Login</Link></p>
      </div>
    </div>
</div>

  );
};

export default Login;
