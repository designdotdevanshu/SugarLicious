import React from 'react'
import Slider1 from "../../../assets/Slider/Slider (1).png"
import Slider2 from "../../../assets/Slider/Slider (2).png"
import Slider3 from "../../../assets/Slider/Slider (3).png"
import Slider4 from "../../../assets/Slider/Slider (4).png"
import Slider5 from "../../../assets/Slider/Slider (5).png"
import { useState } from 'react'
import { useEffect } from 'react'

const Sliders = [Slider1, Slider2, Slider3, Slider4, Slider5];
const Slider = () => {
    const [currImg,setCurrImg] = useState(0);
    // useEffect(()=>{
    // },[])
    return (
        <div id='SliderContainer'>
            <div className='Slider'>
                {
                    Sliders.map((curr,id) => {
                        return (
                            <div onMouseEnter={()=>setCurrImg(id)}>
                                <img src={curr} alt='SliderImages' />
                            </div>
                        )
                    })
                }
            </div>
            <div id='SliderBTN'>
                {
                    Sliders.map((curr, id) => {
                        return (
                            <button onClick={() => console.log(id)} className={currImg === id && "active" }></button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider