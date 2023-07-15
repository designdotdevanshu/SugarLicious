import React from 'react';
import Logo from '../../assets/PerkyBeansLogo.png';
import { IoMdMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
const Header = () => {
  const [menuShown, setMenuShow] = useState(false);
  const menuRef = useRef(0);
  useEffect(() => {
    // const data = menuRef.current.style.top;
    menuShown ?
    menuRef.current.style.top = "60px"
    :
    menuRef.current.style.top = "-100vw"
    // console.log(menuShown,data);
  }, [menuShown])
  return (
    <>
      <div className='Header'>
        <img src={Logo} alt='Logo' />
        <ol>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>PRODUCTS</a></li>
          <li><a href='#'>ORDERS</a></li>
          <li><a href='#'>CONTACT</a></li>
          <li><a href='#'>RESERVE SEAT</a></li>
        </ol>

        <div id='MenuIcons'>
          {
            menuShown ?
              <MdClose onClick={() => setMenuShow(!menuShown)} /> :
              <IoMdMenu onClick={() => setMenuShow(!menuShown)} />
          }
        </div>
      </div>
      <ol ref={menuRef} id='responiveSliderMenu'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#'>PRODUCTS</a></li>
        <li><a href='#'>ORDERS</a></li>
        <li><a href='#'>CONTACT</a></li>
        <li><a href='#'>RESERVE SEAT</a></li>
      </ol>
    </>

  )
}

export default Header