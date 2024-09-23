import React from 'react'
import Icon from './Icon';
import styled from 'styled-components'
import { SiGmail } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF, FaGithub } from "react-icons/fa";
import './style.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { signInWithGoogle, signInWithFacebook, signInWithGithub, signInWithEmail } from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, password } = user;

        if (name && email && password) {

            const res = await
                fetch
                    ("https://food-to-fly-cf5ad-default-rtdb.firebaseio.com/FoodToFly.json ",
                        {
                            method: "POST",
                            headers:
                            {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify
                                ({
                                    name,
                                    email,
                                    password
                                }),
                        })
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    password: ""
                });


                toast.success("Login Successfully", { autoClose: 2095 });

            }
        }
        else {
            toast.error("Please fill all required details", { autoClose: 2095 })
        }
    }

    const FacebookBackground =
        "#DDDDDD";
    const facebookcolor = "#3b5998";
    const GithubBackground =
        "#DDDDDD";
    const MailBackground =
        "#DDDDDD";
    const Mailcolor = "#EA4335";
    const GoogleBackground = "#DDDDDD";
    return (
        <>
            <div className="mainmaincontainer">
                <div className="maincontainer">
                    <div className="content">
                        <div className="text"> <h3> WELCOME </h3></div>
                        <form method='POST'>
                            <div className="inputcontainer">
                                <div className="input1">
                                    <label htmlFor="Name">
                                        <i class="zmdi zmdi-account zmdi-hc-lg material-icons-name "></i>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        placeholder='Username'
                                        value={user.name}
                                        onChange={getUserData}
                                        required autoComplete='off' /></div>

                                <div className="input2">
                                    <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                                    <input type="email"
                                        name="email"
                                        placeholder='Email'
                                        value={user.email}
                                        onChange={getUserData}
                                        required autoComplete='off' />
                                </div>
                                <div className="input3">
                                    <label htmlFor="password"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        value={user.password}
                                        onChange={getUserData} required
                                        placeholder='Password' autoComplete='off' />
                                </div>
                            </div>
                            <br />
                            <ButtonContainer>
                                <button className='btnsubmit' type="submit" onClick={postData}>Login</button>
                            </ButtonContainer>
                            <LoginWith>OR LOGIN WITH</LoginWith>
                            <div className="iconscontainer">
                                <IconsContainer>
                                    <Icon color={FacebookBackground}>
                                        <FaFacebookF color={facebookcolor} onClick={signInWithFacebook} />
                                    </Icon>
                                    <Icon color={GithubBackground}>
                                        <FaGithub color='black' onClick={signInWithGithub} />
                                    </Icon>
                                    <Icon color={MailBackground}>
                                        <SiGmail color={Mailcolor} onClick={signInWithEmail} />
                                    </Icon>
                                    <Icon color={GoogleBackground}>
                                        <FcGoogle onClick={signInWithGoogle} />
                                    </Icon>
                                </IconsContainer>
                            </div>
                        </form>
                        <div className='registerlink'>
                            <NavLink to="/register" className="registerlink" > New User?click here </NavLink>
                            <NavLink to="/forgotPassword" className="registerlink"> Forgot Password?</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login


const IconsContainer = styled.div`

  display: flex;
  justify-content: space-evenly;

  margin: 1.2rem 0 1.5rem 0;
  width: 100%;
  `;

const LoginWith = styled.h5`
//   cursor: pointer;
padding-top:0.3rem;
text-align:center;
  `;

const ButtonContainer = styled.div`
  margin: 0rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

