import React from 'react';
import Logo from '../../assets/PerkyBeansLogo.png';
import { IoMdMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import RandomUser from '../../assets/RandomUser.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuShown, setMenuShow] = useState(false);
  const menuRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    menuShown ? menuRef.current.style.top = "58px" : menuRef.current.style.top = "-120vh"
  }, [menuShown])
  return (
    <>
      <div className='Header'>
        <img src={Logo} alt='Logo' />
        <ol>
          <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/")}>PRODUCTS</li>
          <li onClick={() => navigate("/")}>ORDERS</li>
          <li onClick={() => navigate("/Contact")}>CONTACT</li>
          <li onClick={() => navigate("/ReserveSeat")}>RESERVE SEAT</li>
        </ol>

        <div id='MenuIcons'>
          {
            menuShown ?
              <MdClose onClick={() => setMenuShow(!menuShown)} /> :
              <IoMdMenu onClick={() => setMenuShow(!menuShown)} />
          }
        </div>
      </div>
      <div ref={menuRef} id='responiveSliderMenu'>
        <div id='userLoginINFO'>
          <img src={RandomUser} alt='UserImg' />
          <div>
            <h2>SHUBHAM JOSHI</h2>
            <p>shubhamjoshii676@gmail.com</p>
          </div>
        </div>
        <div id='loginRegisterBTNS'>
          <button>LOGIN</button>
          <button>REGISTER</button>
        </div>
        <ol >
          <li onClick={() => navigate("/")}>HOME</li>
          <li onClick={() => navigate("/")}>PRODUCTS</li>
          <li onClick={() => navigate("/")}>ORDERS</li>
          <li onClick={() => navigate("/Contact")}>CONTACT</li>
          <li onClick={() => navigate("/ReserveSeat")}>RESERVE SEAT</li>
        </ol>
        <button id='logoutBTN'>LOGOUT</button>
      </div>
    </>

  )
}

export default Header