import React from "react";
import MANWOMENDinning from "../../assets/ManWomenDining.png";
import {BsTelephoneFill} from "react-icons/bs";
import {BiCalendar, BiSolidTimeFive} from "react-icons/bi";
import {FaUserAlt} from "react-icons/fa";
// import <Ba></Ba>ckground from "../../assets/ManWomenDining.png"
const ReserveSeat = () => {
  return (
    <React.Fragment>
      <div className="ReserveImage">
        <div className="ReserveSeatContainer">
          <div className="ReserveSeat">
            <div className="BlurBackground"></div>
            <div id="ReseverSeatForm">
              <form>
                <div>
                  <BsTelephoneFill />
                  <input type="number" placeholder="YOUR NUMBER" />
                </div>
                <div>
                  <FaUserAlt />
                  <input type="text" placeholder="PERSONS" />
                </div>
                <div>
                  <BiCalendar />
                  {/* <input type='text' placeholder='SELECT DATE'/> */}
                  <input type="date" placeholder="SELECT DATE" />
                </div>
                <div>
                  <BiSolidTimeFive />
                  {/* <input type='text' placeholder='SELECT TIME'/> */}
                  <input type="time" placeholder="SELECT TIME" />
                </div>
                <button>BOOK NOW</button>
              </form>
              <div id="SecondHALF">
                <h2>
                  BOOK YOUR TABLE TO ENJOY <br />
                  THE AMBIENCE
                </h2>
                <img src={MANWOMENDinning} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReserveSeat;
