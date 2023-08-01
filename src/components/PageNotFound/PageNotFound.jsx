import gif from "../../assets/giphy.gif";
import {NavLink} from "react-router-dom";
import Header from "../Header/Header";
const PageNotFound = () => {
  return (
    <>
      <Header />
      <div id="PageNotFound">
        <img src={gif} alt="giphy" id="left-column" />
        <div className="right-column">
          <div className="big-text">Oops!</div>
          <div className="small-text">404</div>
          <div className="small-text">Page Not Found</div>
          <p className="additional-text-right"> It seems like you&#39;ve stumbled upon a broken link or a page that no longer exists. Our apologies for the inconvenience! Don&#39;t worry; we&#39;re here to help you get back on track. Please click on the button below to go to our homepage and explore our website.</p>
          {/* <div>
          </div> */}
          <button className="home-button">
            <NavLink to="/SugarLicious">Home Button</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
