import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider1 from "../../../assets/Slider/Slider (1).png";
import Slider2 from "../../../assets/Slider/Slider (2).png";
import Slider3 from "../../../assets/Slider/Slider (3).png";
import Slider4 from "../../../assets/Slider/Slider (4).png";
import Slider5 from "../../../assets/Slider/Slider (5).png";

const Slider = () => {
  return (
    <React.Fragment>
      <Carousel infiniteLoop showStatus={false} showArrows={false} autoPlay showThumbs={false} interval={3000} axis="horizontal" swipeable={true} emulateTouch={true} stopOnHover={false}>
        <div>
          <img src={Slider1} alt="Slider1" />
        </div>
        <div>
          <img src={Slider2} alt="Slider2" />
        </div>
        <div>
          <img src={Slider3} alt="Slider3" />
        </div>
        <div>
          <img src={Slider4} alt="Slider4" />
        </div>
        <div>
          <img src={Slider5} alt="Slider5" />
        </div>
      </Carousel>
    </React.Fragment>
  );
};

export default Slider;
