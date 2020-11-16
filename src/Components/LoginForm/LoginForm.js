import React, { useState } from 'react';
import "./LoginForm.css";
import image from './image.jpg';
import mail from './mail.png';
import lock from './lock.png';
import user from './user.png';
import confirmLock from './confirmLock.png';


const LoginForm = () =>{
    const [loggedIn, setLoggedIn] = useState(true)
    
    return(
        <div className="loginContainer" >
            <div className="logoDiv">
                <h1>Manage Your Business Account</h1>
                <p>Donec dictum nisl nec mi lacinia, sed maximus tellus eleifend. Proin molestie cursus sapien ac eleifend.</p>
                <img className="addImage" src={image} alt="company logo"/>
            </div>
            <div className="formDiv">
                <div className={loggedIn === true?'' : 'hide'}>
                    <h1>Login To Your Account</h1>
                    <p>Enter your details to login.</p>
                    <form>
                        <div>
                            <label>Email Address</label><br/>
                            <div className="inputDiv">
                                <img className="icon" src={mail} alt="mail"/><input className="inputData" type="email" placeholder="Enter Email Address" required/>
                            </div>
                        </div>
                        <div>
                            <label>Password</label><br/>
                            <div className="inputDiv">
                                <img className="icon" src={lock} alt="mail"/><input className="inputData" type="password" placeholder="Enter your password" required/>
                            </div>
                        </div>
                        <div>
                            <p><input type="checkbox"/> Remeber Me</p>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                        <p className="terms">By clicking login, you agree to our <span > Terms & Conditions!</span></p>
                        <p className="terms">Dont have an account? <span onClick={()=>setLoggedIn(false)}>Register here</span></p>
                    </form>
                </div>
                <div className={loggedIn === false?'' : 'hide'}>
                    <h1>Signup for an Account</h1>
                    <p>Enter your details to create account for your Business.</p>
                    <form>
                        <div>
                            <label>Full Name</label><br/>
                            <div className="inputDiv">
                                <img className="icon" src={user} alt="mail"/><input className="inputData" type="email" placeholder="Enter Email Address" required/>
                            </div>
                        </div>
                        <div>
                            <label>Email Address</label><br/>
                            <div className="inputDiv">
                                <img className="icon" src={mail} alt="mail"/><input className="inputData" type="email" placeholder="Enter Email Address" required/>
                            </div>
                        </div>
                        <div>
                            <label>Password</label><br/>
                            <div className="inputDiv">
                                <img className="icon" src={lock} alt="mail"/><input className="inputData" type="email" placeholder="Enter Email Address" required/>
                            </div>
                        </div>
                        <div>
                            <label>Confirm Password</label><br/>
                            <div className="inputDiv">
                                <img className="icon" src={confirmLock} alt="mail"/><input className="inputData" type="password" placeholder="Enter your password" required/>
                            </div>
                        </div>
                        <div>
                            <button>SignUp</button>
                        </div>
                        <p className="terms">By clicking Signup, you agree to our <span > Terms & Conditions!</span></p>
                        <p className="terms">Already have an account? <span onClick={()=>setLoggedIn(true)}>Login here</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;