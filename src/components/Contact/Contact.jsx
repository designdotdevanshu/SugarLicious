import React from "react";
import SideIMG from "../../assets/Slider/Slider (1).png";
const Contact = () => {
  return (
    <React.Fragment>
      <div id="Contact">
        <img src={SideIMG} alt="SideIMG" />
        <div id="ContactForm">
          <div id="blur"></div>
          <div id="BlurFORM">
            <h2>We’d love to help</h2>
            <p>24/7 we will answer your questions and problems</p>
            <form>
              <div>
                <input type="text" placeholder="First Name" name="" />
                <input type="text" placeholder="Last Name" name="" />
              </div>
              <div>
                <input type="text" placeholder="E-mail" name="" />
                <input type="number" placeholder="Contact Number" name="" />
              </div>
              <textarea name="" id="" cols="30" rows="10" placeholder="Describe your issue"></textarea>
              <button>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
