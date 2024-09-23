import React, { useState } from 'react'
import styled from 'styled-components'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, NavLink } from 'react-router-dom'
const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: ""
    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value })
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phonenumber, password, confirmpassword } = user;

        if (name && email && phonenumber && password && confirmpassword) {

            const res = await
                fetch
                    ("https://food-to-fly-cf5ad-default-rtdb.firebaseio.com/FoodToFly.json ",
                        {
                            method: "POST",
                            headers:
                                { "Content-Type": "application/json", },
                            body: JSON.stringify
                                ({
                                    name,
                                    email,
                                    phonenumber,
                                    password,
                                    confirmpassword
                                }),
                        })
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    phonenumber: "",
                    password: "",
                    confirmpassword: ""
                });
                
                toast.success("Registered Successfully", {autoClose: 2095} );
            }
        }
        else {
            toast.error("Please fill all required details" , {autoClose: 2095} );
        }
    }

    return (
        <>
            <div className="mainmaincontainer">
                <div className="maincontainer">
                    <div className="text"> <h3> JOIN US </h3></div>

                    <form method='POST'>
                        <div className="inputcontainer">
                            <div className="input1">
                                <label htmlFor="Name">
                                    <i class="zmdi zmdi-account zmdi-hc-lg material-icons-name "></i>
                                </label>
                                <input type="text" name="name" id="" placeholder='Username' value={user.name} onChange={getUserData} required autoComplete='off' /></div>

                            <div className="input2">
                                <label htmlFor="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder='Email' value={user.email} onChange={getUserData} required autoComplete='off' />
                            </div>
                            <div className="input4">
                                <label htmlFor="phoneno"><i class="zmdi zmdi-phone-in-talk"></i></label>
                                <input type="phoneno" name="phonenumber" id="phoneno" placeholder='Phone number' value={user.phonenumber} onChange={getUserData} required autoComplete='off' />
                            </div>
                            <div className="input3">
                                <label htmlFor="password"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" required placeholder='Password' value={user.password} onChange={getUserData} autoComplete='off' />
                            </div>
                            <div className="input3">
                                <label htmlFor="confirmpassword"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="confirmpassword" id="Confirmpassword" required placeholder='Confirm Password' value={user.confirmpassword} onChange={getUserData} autoComplete='off' />
                            </div>
                        </div>
                        <ButtonContainer>
                            <button className='btnsubmit' type="submit" onClick={postData}>Register</button>
                        </ButtonContainer>
                        <div className='registerlink'>
                            <Link to="/login" className="registerlink" >Already have an account? </Link>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register

const ButtonContainer = styled.div`
  margin: 0rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  `;
