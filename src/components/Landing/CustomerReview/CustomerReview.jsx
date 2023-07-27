import {Reviews} from "../../../Data/FrontJSON";
import {AiFillStar} from "react-icons/ai";
const CustomerReview = () => {
  return (
    <>
      <h2 id="reviewHeading">Customer Review</h2>
      <div className="CustomerReview">
        {Reviews.map((curr, ids) => {
          return (
            <div className="reviewCard" key={ids}>
              <div id="userINFO">
                <img src={curr.CustomerImage} alt="customerIMG" />
                <h2>{curr.CustomerName}</h2>
              </div>
              <p>{curr.Review.length > 180 ? `${curr.Review.slice(0, 180)}...` : curr.Review}</p>
              <span id="customerDate">{curr.Date}</span>
              <div id="stars">
                <AiFillStar id="starLOGO" />
                <span>{curr.Rating.toFixed(1)} / 5.0</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CustomerReview;
