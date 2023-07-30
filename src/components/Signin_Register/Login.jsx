import {useState, useEffect} from "react";
import google from "../../assets/google.png";
import {NavLink} from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import Header from "../Header/Header";
import {UserData, Notification} from "../../routes/App";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
// import { toast } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
  });
  const [passwordShow, setPasswordShow] = useState(false);
  const {userData, setUserData} = useContext(UserData);
  const {notification} = useContext(Notification);
  const navigate = useNavigate();
  useEffect(() => {
    passwordShow ? (document.getElementById("Password").type = "text") : (document.getElementById("Password").type = "password");
  }, [passwordShow]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({...loginData, [name]: value});
  };

  const submitLogin = async (e) => {
    e.perventDefault;
    if (userData.Info.Email === loginData.Email && userData.Info.Password === loginData.Password && userData) {
      let a = {...userData.Info, logined: true};
      setUserData({...userData, Info: a});
      notification("User Logined");
      setTimeout(() => {
        navigate("/SugarLicious");
      }, 1000);
    } else if (userData.Info.Email !== loginData.Email) {
      notification("User Email is Not Matched");
    } else {
      notification("User Password is Not Matched");
    }
  };

  return (
    <>
      <Header />
      <div id="Login">
        <form>
          <h1>LOGIN</h1>
          <label htmlFor="Email">Email:</label>
          <br />
          <input type="Email" id="Email" name="Email" placeholder="Enter your Email" value={loginData.Email} onChange={handleInput} />
          <label htmlFor="Password">Password:</label> <br />
          <div id="passwordContainer">
            <input type="Password" id="Password" name="Password" placeholder="Enter your Password" value={loginData.Password} onChange={handleInput} />
            <div
              id="passwordEYE"
              onClick={() => {
                setPasswordShow(!passwordShow);
              }}>
              {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
            </div>
          </div>
          <div className="forgot-password">
            <NavLink to="./forgotpassword">Forgot Password?</NavLink>
            {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
          </div>
          <input type="button" value="LOGIN" onClick={submitLogin} />
          <div className="no-account">
            <p>Don&apos;t have an account?</p>
            <NavLink to="/SugarLicious/Register" ClassName="active">
              Sign Up
            </NavLink>
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
  );
};

export default Login;
