import React from "react";
import Header from "../Header/Header";
// import PNF_Image from "https://1.bp.blogspot.com/-b8GmwqM0FcQ/UbvuhlbiMmI/AAAAAAAACWc/2xV_08r8Bso/s640/Page+Not+Found.jpg";

const mystyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  height: "45vh",
  width: "100vw",
};

const PageNotFound = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={mystyle}>
        {/* <img src={PNF_Image} alt="404-PageNotFound" /> */}
        <img src="https://1.bp.blogspot.com/-b8GmwqM0FcQ/UbvuhlbiMmI/AAAAAAAACWc/2xV_08r8Bso/s640/Page+Not+Found.jpg" alt="404-PageNotFound" />
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
