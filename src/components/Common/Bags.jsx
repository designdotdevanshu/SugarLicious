import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { RiArrowDropUpLine, RiArrowDropDownLine} from "react-icons/ri";

import Image from "../../assets/Beverages/image (1).png"
const Bags = () => {
    const ref = useRef(null);
    // const { onClickOutside } = props;
    const [showBag, setShowBag] = useState(false);
    const [showAmountDetails,setShowAmountDetail]= useState(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                // onClickOutside && onClickOutside();
                setShowBag(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [showBag]);

    let arr = [10, 20];
    return (
        <>
            {
                showBag ?
                    <div id='BagSliderContainer' >
                        <div id='BagSlider' ref={ref}>
                            <div id='bag-back-btn'>
                                <MdOutlineArrowBackIos onClick={() => setShowBag(!showBag)} />
                                <h3>BAG</h3>
                            </div>
                            <div id='RegiLogin'>
                                <p>100 Reward Points on new registration</p>
                                <button id='Login-Register-BTN'>LOGIN/ REGISTER</button>
                            </div>
                            <div id='bagScroll'>
                                {
                                    arr.map((curr,ids) => {
                                        return (
                                            <div id='productCart'>
                                                <div id='productCartFront'>
                                                    <img src={Image} alt='CardImage' />
                                                    <div id='productDetail'>
                                                        <div>
                                                            <h3>LATTE COFFEE</h3>
                                                            <h4>Quantity: 2L + 1M</h4>
                                                        </div>
                                                        <h4>$ 1000</h4>
                                                        <div id='Icons'>
                                                            <IoIosClose />
                                                            {
                                                                showAmountDetails === ids ?
                                                                <RiArrowDropUpLine  onClick={()=>setShowAmountDetail(null)}/>
                                                                :
                                                                <RiArrowDropDownLine onClick={()=>setShowAmountDetail(ids)}/>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id='Amount_Info_Show' style={showAmountDetails === ids ? {height:"100%"}:{height:"0"}}>
                                                    <div id='Amount_INFO'>
                                                        <h4>TOTAL :</h4>
                                                        <div>
                                                            <p>Regular</p>
                                                            <p>Regular</p>
                                                            <p>Regular</p>
                                                        </div>
                                                        <div>
                                                            <p>$ 500</p>
                                                        </div>
                                                    </div>
                                                    <div id='TotalAmt'>
                                                        <p>You Pay :</p>
                                                        <p>$ 850</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div id='Bag-Total-Price'>
                                <h4>Grand Total : </h4>
                                <h4>:</h4>
                                <h4>$ 2,000</h4>
                                <button>PROCEED</button>
                            </div>
                        </div>
                    </div> :
                    <FaShoppingBag id='bagBTN' onClick={() => setShowBag(!showBag)} />
            }
        </>
    )
}

export default Bags