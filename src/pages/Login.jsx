import React from 'react'
import { useState } from 'react';
import "./Login.css"
function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
      });
      function handleChange(event) {
        const { name, value } = event.target;
        setData((prevValue) => {
          return ({ ...prevValue, [name]: value })
        });
      }
    return (
        <>
            <div className="login-body">
                <div className="container1">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input type="text" className="login__input" name="email" onChange={handleChange} placeholder="User name / Email" />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"></i>
                                    <input type="password" className="login__input" name='password' onChange={handleChange} placeholder="Password" />
                                </div>
                                <button className="button login__submit" onClick={(event)=>{
                                    console.log(data);
                                    event. preventDefault();
                                    }}>
                                    <span className="button__text">Log In Now</span>
                                    <i className="button__icon fas fa-chevron-right"></i>
                                </button>
                            </form>
                            <div className="social-login" >
                                <h3>log in</h3>
                            </div>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login