import {useState} from "react";
import Image1 from "../../assets/Beverages/image (1).png";
import {IoMdClose} from "react-icons/io";
const OrderCards = ({product, orderData, ids, userData, setUserData}) => {
  const [trackShow, setTrackShow] = useState(null);
  const removeMyOrder = () => {
    let a = userData.Orders.filter((e) => e._id !== product._id);
    setUserData({...userData, Orders: a});
  };
  return (
    <div id="orderProduct">
      <div id="orderCards">
        <h4>ORDER ID : {Math.floor(Math.random() * 1000000) + 1000000}</h4>
        <h2>{product.Name}</h2>
        <div id="orders-Product">
          {orderData.SmallCount && (
            <div>
              <img src={product.Image} alt="ProductImg" />
              <p>REGULAR</p>
              <p>
                ₹ {product.Price - 50}*{orderData.SmallCount}
              </p>
            </div>
          )}
          {orderData.MediumCount && (
            <div>
              <img src={product.Image} alt="ProductImg" />
              <p>MEDIUM</p>
              <p>
                ₹ {product.Price}*{orderData.MediumCount}
              </p>
            </div>
          )}
          {orderData.LargeCount && (
            <div>
              <img src={product.Image} alt="ProductImg" />
              <p>REGULAR</p>
              <p>
                ₹ {product.Price + 50}*{orderData.LargeCount}
              </p>
            </div>
          )}
        </div>
        <p id="orderDesc">{product.Desc.slice(0, 70)}...</p>
        <div id="btns">
          <button onClick={removeMyOrder}>CANCEL</button>
          <button
            onClick={() => {
              setTrackShow(null);
              setTrackShow(orderData._id);
            }}>
            TRACK YOUR ORDER
          </button>
        </div>
      </div>
      {trackShow === orderData._id ? (
        <div className="track-order">
          <IoMdClose id="closeICON" onClick={() => setTrackShow(null)} />
          <h3>TRACK YOUR ORDER</h3>
          <div>
            <div id="Line"></div>
            <div id="timeStamp-Order">
              <div id="currStage-Order"></div>
              <h5>ORDER CONFIRMED, 10th July 2023, 10:45 AM </h5>
              <p>Your Order has been placed.</p>
              <p>Chef is making your product ready.</p>
            </div>
            <div id="timeStamp-Order">
              <div id="currStage-Order"></div>
              <h4>ORDER SHIPPED at 10th July 2023, 11:10 AM </h4>
              <p>Perky Bean Logistics - FMPPQ934271</p>
              <p>Your items has been shipped.</p>
            </div>
            <div id="timeStamp-Order">
              <div id="currStage-Order"></div>
              <h5>OUT FOR DELIVERY at 11:30 am</h5>
              <p>Your item is out for delivery</p>
            </div>
            <div id="timeStamp-Order">
              <div id="currStage-Order"></div>
              <h5>DELIVERED by 12 am</h5>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OrderCards;
