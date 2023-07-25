import React from 'react'
import SearchBar from '../Common/SearchBar'
import { useState } from 'react'
import OrderCards from './OrderCards'
import WishlistCards from './WishlistCards'
import Bags from '../Common/Bags'
import Scooter from "../../assets/scooter.png";
const Orders = () => {
  const [orderShow, setOrderShow] = useState(true);
  return (
    <>
      <SearchBar bgColor="white" />
      <div id="Orders">
        <div id='order-wishlists'>
          <h3 onClick={() => setOrderShow(true)} id={orderShow && "active"}>MY ORDERS</h3>
          <h3 onClick={() => setOrderShow(false)} id={!orderShow && "active"}>MY WISHLIST</h3>
        </div>
        {
          orderShow ?
            <div id='orderCardsContainer'>
              <OrderCards />
              <OrderCards />
              <OrderCards />
            </div> : <div id='wishlist'>
              <WishlistCards />
              <WishlistCards />
              <WishlistCards />
              <WishlistCards />
            </div>
        }
      </div>
      <img src={Scooter} alt='Scooter' id='scooterIMG'/>
      <Bags />
    </>

  )
}

export default Orders