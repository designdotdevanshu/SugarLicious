import React ,{ useState ,useEffect } from "react";
import google from "../../assets/google.png";
import { NavLink } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Header from "../Header/Header";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";


import { db } from "../firebase";
import { onValue, ref, set } from "firebase/database";

const Login = () => {
  const [loginData,setLoginData] = useState({
    Email:"",Password:""
  })
  const [passwordShow, setPasswordShow] = useState(false);
  
  // const [user,setUser] = useState(null);
  // const cookies = new Cookies();


  useEffect(() => {
    passwordShow ?
      document.getElementById("Password").type = "text"
      :
      document.getElementById("Password").type = "password";
  }, [passwordShow])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({...loginData,[name]:value});
  }

  // const login = (jwt_token="afdsasdf453531151") => {
  //   const decode = jwt(jwt_token);
  //   setUser(decode);
  //   cookies.set("jwt_authorization",jwt_token,{
  //     expires:new Date(decode.exp * 1000),
  //   })
  // }
 
  const submitLogin = async (e) => {
    e.perventDefault;
    // login();
    
    // const starCountRef = ref(db);
    // const User = [];
    // if(loginData.Email && loginData.Password){
    //   onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     Object.values(data)?.map((curr) => {
    //       User.push(curr);
    //     });
    //     // console.log(User);
    //     // User.find(e => e.Email === loginData.Email && e.Password === loginData.Password);
    //     console.log(User.find(e => e.Email === loginData.Email && e.Password === loginData.Password));
    //   })
    // }

  }

  // useEffect(()=>{
  //   submitLogin();
  // },[])

  useEffect(()=>{
    console.log(loginData);
  },[loginData])


  return (
    <>
      <Header />
      <div id="Login">
        <form>
          <h1>LOGIN</h1>
          <label htmlFor="Email">Email:</label><br />
          <input type="Email" id="Email" name="Email" placeholder="Enter your Email" value={loginData.Email} onChange={handleInput}/>
          <label htmlFor="Password">Password:</label> <br />
          <div id='passwordContainer'>
            <input type="Password" id="Password" name="Password" placeholder="Enter your Password" value={loginData.Password} onChange={handleInput} />
            <div id='passwordEYE' onClick={() => {
              setPasswordShow(!passwordShow)
            }}>
              {
                passwordShow ?
                  <AiFillEye /> :
                  <AiFillEyeInvisible />
              }
            </div>
          </div>
          <div className="forgot-password">
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <input type="button" value="LOGIN" onClick={submitLogin}/>
          <div className="no-account">
            <p>Don't have an account?</p>
            <NavLink to="/Register" ClassName="active" >Sign Up</NavLink>
          </div>
        </form>
        <div className="social-login">
          <p>Or log in with:</p>
          <button className="google-login">
            <img src={google} alt="google" />
            <span>Log in with Google</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Login