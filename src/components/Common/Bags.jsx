import {useEffect, useRef, useState} from "react";
import {FaShoppingBag} from "react-icons/fa";
import {IoIosClose} from "react-icons/io";
import {MdOutlineArrowBackIos} from "react-icons/md";
import {RiArrowDropUpLine, RiArrowDropDownLine} from "react-icons/ri";
import Image from "../../assets/Beverages/image (1).png";
import {UserData} from "../../routes/App";
import {useContext} from "react";
import {Products} from "../../Data/ProductsJSON";
import {useNavigate} from "react-router-dom";

const Bags = () => {
  const [showBag, setShowBag] = useState(false);
  const [showAmountDetails, setShowAmountDetail] = useState(null);
  const {userData, setUserData} = useContext(UserData);
  let GrandTotal = 0;
  const ref = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowBag(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [showBag]);

  const removeFromBag = (_id) => {
    let a = userData.Bag.filter((e) => e._id !== _id);
    setUserData({...userData, Bag: a});
  };

  return (
    <>
      {showBag ? (
        <div id="BagSliderContainer">
          <div id="BagSlider" ref={ref}>
            <div id="bag-back-btn">
              <MdOutlineArrowBackIos onClick={() => setShowBag(!showBag)} />
              <h3>BAG</h3>
            </div>
            {!userData.Info.logined && (
              <div id="RegiLogin">
                <p>100 Reward Points on new registration</p>
                <button id="Login-Register-BTN" onClick={() => navigate("/SugarLicious/login")}>
                  LOGIN/ REGISTER
                </button>
              </div>
            )}
            <div id="bagScroll">
              {userData?.Bag?.length > 0 ? (
                <>
                  {userData?.Bag?.map((curr, ids) => {
                    const a = Products.find((e) => e._id === curr._id);
                    const smallPrice = (a.Price - 50) * curr.SmallCount;
                    const mediumPrice = a.Price * curr.MediumCount;
                    const largePrice = (a.Price + 50) * curr.LargeCount;
                    const Total = smallPrice + mediumPrice + largePrice;
                    GrandTotal += Total;

                    return (
                      <div id="productCart" key={ids}>
                        <div id="productCartFront">
                          <img src={a.Image} alt="CardImage" />
                          <div id="productDetail">
                            <div id="productName">
                              <h3>{a.Name}</h3>
                              <h4>
                                Quantity: {curr.SmallCount > 0 && curr.SmallCount + "S,"} {curr.MediumCount > 0 && curr.MediumCount + "M,"} {curr.LargeCount > 0 && curr.LargeCount + "L,"}{" "}
                              </h4>
                            </div>
                            <h4>&#x20B9;{Total}</h4>
                            <div id="Icons">
                              <IoIosClose onClick={() => removeFromBag(curr._id)} />
                              {showAmountDetails === ids ? <RiArrowDropUpLine onClick={() => setShowAmountDetail(null)} /> : <RiArrowDropDownLine onClick={() => setShowAmountDetail(ids)} />}
                            </div>
                          </div>
                        </div>
                        <div id="Amount_Info_Show" style={showAmountDetails === ids ? {height: "100%"} : {height: "0"}}>
                          <div id="Amount_INFO">
                            <h4>TOTAL :</h4>
                            <div>
                              <p>Regular {curr.SmallCount && "*" + curr.SmallCount}</p>
                              <p>Medium {curr.MediumCount && "*" + curr.MediumCount}</p>
                              <p>Large {curr.LargeCount && "*" + curr.LargeCount}</p>
                            </div>
                            <div>
                              <p>&#x20B9;{smallPrice}</p>
                              <p>&#x20B9;{mediumPrice}</p>
                              <p>&#x20B9;{largePrice}</p>
                            </div>
                          </div>
                          <div id="TotalAmt">
                            <p>You Pay :</p>
                            <p>&#x20B9;{Total}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div id="productCart" style={{textAlign: "center"}}>
                  No Item Found in Bag
                </div>
              )}
            </div>
            <div id="Bag-Total-Price">
              <h4>Grand Total : </h4>
              <h4>&#x20B9; {GrandTotal}</h4>
              <button>ORDER NOW</button>
            </div>
          </div>
        </div>
      ) : (
        <FaShoppingBag id="bagBTN" onClick={() => setShowBag(!showBag)} />
      )}
    </>
  );
};

export default Bags;
