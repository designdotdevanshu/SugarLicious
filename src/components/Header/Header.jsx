import React, { useState, useRef, useEffect, useContext } from "react";
import RandomUser from "../../assets/RandomUser.png";
import Logo from "../../assets/PerkyBeansLogo.png";

import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { UserData } from "../../routes/App";
const Header = () => {
  const [menuShown, setMenuShow] = useState(false);
  const menuRef = useRef(0);
  const { userData, setUserData } = useContext(UserData);

  useEffect(() => {
    menuShown ? (menuRef.current.style.top = "58px") : (menuRef.current.style.top = "-120vh");
  }, [menuShown]);

  const logoutBTN = () => {
    if (userData) {
      let a = { ...userData.Info, logined: false };
      setUserData({ ...userData, Info: a });
    }
  };

  return (
    <React.Fragment>
      <div className="Header">
        <NavLink to="/SugarLicious/" ClassName="active">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <ol>
          <NavLink to="/SugarLicious/" ClassName="active">
            <li>HOME</li>
          </NavLink>
          <NavLink to="/SugarLicious/products" ClassName="active">
            <li>PRODUCTS</li>
          </NavLink>
          <NavLink to="/SugarLicious/orders/my-order" ClassName="active">
            <li>ORDERS</li>
          </NavLink>
          <NavLink to="/SugarLicious/contact" ClassName="active">
            <li>CONTACT</li>
          </NavLink>
          <NavLink to="/SugarLicious/reserveseat" ClassName="active">
            <li>RESERVE SEAT</li>
          </NavLink>
          <div id="LOGINRegister">
            {userData?.Info.logined ? (
              <a onClick={() => logoutBTN()}>
                <button id="loginRegisterHeader">LOGOUT</button>
              </a>
            ) : (
              <NavLink to="/SugarLicious/login" ClassName="active">
                <button id="loginRegisterHeader">LOGIN / REGISTER</button>
              </NavLink>
            )}
          </div>
        </ol>

        <div id="MenuIcons">{menuShown ? <MdClose onClick={() => setMenuShow(!menuShown)} /> : <IoMdMenu onClick={() => setMenuShow(!menuShown)} />}</div>
      </div>
      <div ref={menuRef} id="responiveSliderMenu">
        {userData?.Info.logined ? (
          <div id="userLoginINFO">
            <img src={RandomUser} alt="UserImg" />
            <div>
              <h2>{userData?.Info.Name}</h2>
              <p>{userData?.Info.Email}</p>
            </div>
          </div>
        ) : (
          <div id="loginRegisterBTNS">
            <NavLink to="/SugarLicious/login" ClassName="active" onClick={() => setMenuShow(false)}>
              <button>LOGIN</button>
            </NavLink>
            <NavLink to="/SugarLicious/register" ClassName="active" onClick={() => setMenuShow(false)}>
              <button>REGISTER</button>
            </NavLink>
          </div>
        )}
        <ol onClick={() => setMenuShow(false)}>
          <NavLink to="/SugarLicious/" ClassName="active">
            <li>HOME</li>
          </NavLink>
          <NavLink to="/SugarLicious/products" ClassName="active">
            <li>PRODUCTS</li>
          </NavLink>
          <NavLink to="/SugarLicious/orders/my-order" ClassName="active">
            <li>ORDERS</li>
          </NavLink>
          <NavLink to="/SugarLicious/contact" ClassName="active">
            <li>CONTACT</li>
          </NavLink>
          <NavLink to="/SugarLicious/reserveseat" ClassName="active">
            <li>RESERVE SEAT</li>
          </NavLink>
        </ol>
        {userData?.Info.logined && (
          <button id="logoutBTN" onClick={() => logoutBTN()}>
            LOGOUT
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Header;
