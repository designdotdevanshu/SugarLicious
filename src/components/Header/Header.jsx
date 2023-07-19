import React from 'react';
import Logo from '../../assets/PerkyBeansLogo.png';
import { IoMdMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import RandomUser from '../../assets/RandomUser.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuShown, setMenuShow] = useState(false);
  const menuRef = useRef(0);

  useEffect(() => {
    menuShown ? menuRef.current.style.top = "58px" : menuRef.current.style.top = "-120vh"
  }, [menuShown])
  return (
    <React.Fragment>
      <div className='Header'>
        <img src={Logo} alt='Logo' />
        <ol>
          <NavLink to="/" exact ClassName="active"><li>HOME</li></NavLink>
          <NavLink to="/products" ClassName="active"><li>PRODUCTS</li></NavLink>
          <NavLink to="/orders" ClassName="active"><li>ORDERS</li></NavLink>
          <NavLink to="/contact" ClassName="active"><li>CONTACT</li></NavLink>
          <NavLink to="/reserveseat" ClassName="active"><li>RESERVE SEAT</li></NavLink>
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
        <ol  onClick={()=>setMenuShow(false)}>
        <NavLink to="/" exact ClassName="active"><li>HOME</li></NavLink>
          <NavLink to="/products" ClassName="active" ><li>PRODUCTS</li></NavLink>
          <NavLink to="/orders" ClassName="active" ><li>ORDERS</li></NavLink>
          <NavLink to="/contact" ClassName="active" ><li>CONTACT</li></NavLink>
          <NavLink to="/reserveseat" ClassName="active"><li>RESERVE SEAT</li></NavLink>
        </ol>
        <button id='logoutBTN'>LOGOUT</button>
      </div>
    </React.Fragment>

  )
}

export default Header