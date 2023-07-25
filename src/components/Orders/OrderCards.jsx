import React from 'react'
import Image1 from "../../assets/Beverages/Image (1).png"
import {IoMdClose} from "react-icons/io"
const OrderCards = () => {
    return (
        <div id='orderProduct'>
            <div id='orderCards'>
                <h4>ORDER ID : 94173523</h4>
                <h2>LATTE COFFEE</h2>
                <div id='orders-Product'>
                    <div>
                        <img src={Image1} alt='ProductImg' />
                        <p>REGULAR</p>
                        <p>₹ 250*2</p>
                    </div>
                    <div>
                        <img src={Image1} alt='ProductImg' />
                        <p>REGULAR</p>
                        <p>₹ 250*2</p>
                    </div>
                </div>
                <p id='orderDesc'>Two Regular lattee coffee and one medium lattee coffee delivered within 2 hours.</p>
                <div id='btns'>
                    <button>CANCEL</button>
                    <button onClick={() => {
                        document.getElementsByClassName("track-order")[0].style.width = "450px"
                        document.getElementsByClassName("track-order")[0].style.padding = "40px"

                    }}>TRACK YOUR ORDER</button>
                </div>
            </div>
            <div className='track-order'>
                <IoMdClose id="closeICON"  onClick={() => {
                        document.getElementsByClassName("track-order")[0].style.width = "0"
                        document.getElementsByClassName("track-order")[0].style.padding = "0"

                    }}/>
                <h3>TRACK YOUR ORDER</h3>
                <div>
                    <div id='Line'></div>
                    <div id='timeStamp-Order'>
                        <div id='currStage-Order'></div>
                        <h5>ORDER CONFIRMED, 10th July 2023, 10:45 AM </h5>
                        <p>Your Order has been placed.</p>
                        <p>Chef is making your product ready.</p>
                    </div>
                    <div id='timeStamp-Order'>
                        <div id='currStage-Order'></div>
                        <h4>ORDER SHIPPED at 10th July 2023, 11:10 AM </h4>
                        <p>Perky Bean Logistics - FMPPQ934271</p>
                        <p>Your items has been shipped.</p>
                    </div>
                    <div id='timeStamp-Order' >
                        <div id='currStage-Order'></div>
                        <h5>OUT FOR DELIVERY at 11:30 am</h5>
                        <p>Your item is out for delivery</p>
                    </div>
                    <div id='timeStamp-Order'>
                        <div id='currStage-Order'></div>
                        <h5>DELIVERED by 12 am</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCards