import {useState} from "react";
// import {NavLink} from "react-router-dom";
import Header from "../Header/Header";
import {MdEmail} from "react-icons/md";
import {Notification, UserData} from "../../routes/App";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
const ForgotPassword = () => {
  const [forgetData, setforgetData] = useState();
  const [forgetBTN, setforgetBTN] = useState(0);
  const {userData, setUserData} = useContext(UserData);
  const {notification} = useContext(Notification);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <form className="forgot-password-form">
        <h1>Forgot Password</h1>
        <div className="instructions-box">
          <p className="instructions">Enter your email address that you used to register. We&apos;ll send you an email with a link to reset your password. If you don&apos;t see the email, check other places it might be, like your junk, spam, social, or other folders.</p>
        </div>
        {forgetBTN === 0 && (
          <>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" onChange={(e) => setforgetData(e.target.value)} />
            </div>
            <input
              type="button"
              value="SEND OTP"
              className="otp-link"
              onClick={() => {
                if (forgetData === userData.Info.Email) {
                  notification("OTP send to EMAIL ID");
                  setforgetBTN(1);
                } else {
                  notification("User Not Registered");
                }
              }}
            />
          </>
        )}
        {forgetBTN === 1 && (
          <>
            <span>
              <MdEmail /> {userData.Info.Email} <pre onClick={() => setforgetBTN(0)}>(edit)</pre>
            </span>
            <div>
              <label htmlFor="email">OTP:</label>
              <input type="number" id="otp" name="otp" placeholder="Enter OTP" onChange={(e) => setforgetData(e.target.value)} />
            </div>
            <input
              type="button"
              value="SEND OTP"
              className="otp-link"
              onClick={() => {
                if (forgetData.length === 6) {
                  setforgetBTN(2);
                } else {
                  notification("Entered OTP is wrong");
                }
              }}
            />
          </>
        )}
        {forgetBTN === 2 && (
          <>
            <span>
              <MdEmail /> {userData.Info.Email} <pre onClick={() => setforgetBTN(0)}>(edit)</pre>
            </span>
            <div>
              <label htmlFor="email">Enter New Password:</label>
              <input type="text" id="password" name="Password" placeholder="Enter Password" onChange={(e) => setforgetData({...forgetData, Password: e.target.value})} />
            </div>
            <div>
              <label htmlFor="email">Enter Confirm Password:</label>
              <input type="text" id="Confirm_password" name="Confirm_Password" placeholder="Enter Confirm Password" onChange={(e) => setforgetData({...forgetData, Confirm_Password: e.target.value})} />
            </div>
            <input
              type="button"
              value="CONFIRM PASSWORD"
              className="otp-link"
              onClick={() => {
                if (forgetData.Password === forgetData.Confirm_Password && forgetData.Confirm_Password.length >= 8) {
                  notification("User Password Change");
                  navigate("/SugarLicious/Login");
                } else if (forgetData.Password !== forgetData.Confirm_Password) {
                  notification("User Password and Confirm Password not Matched");
                } else if (forgetData.Password.length < 8) {
                  notification("Password length should be greater than and equal to 8");
                }
              }}
            />
          </>
        )}
      </form>
    </>
  );
};

export default ForgotPassword;
