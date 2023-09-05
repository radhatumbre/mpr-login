import "./Login.css"
import LoginImage from "../components/images/LoginImg.png"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
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
        <h1>LOGIN</h1>
        <p>Enter valid details to log in</p>
        <form action="POST">
          <div className="form-group">
          <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
          </div>
          <div className="form-group">
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />

          </div>
          <div className="form-group">
            <button type="submit" onClick={submit}>Login</button>
          </div>
        </form>
        <p>Don't have an account? <Link to="./signup">Sign up</Link></p>
      </div>
    </div>
</div>

  );
};

export default Login;
