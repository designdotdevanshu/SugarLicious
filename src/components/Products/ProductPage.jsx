import React from "react";
import {Products} from "../../Data/ProductsJSON";
import {AiFillStar} from "react-icons/ai";
import {TiMinus, TiPlus} from "react-icons/ti";
import {LuVegan} from "react-icons/lu";
import Veg from "../../assets/veg.png";
// import CustomerReview from "../Landing/CustomerReview/CustomerReview";
// import Footer from "../Footer/Footer";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import Bags from "../Common/Bags";

const ProductPage = () => {
  const [counter0, setCounter0] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [itemDetails, setItemDetails] = useState({});
  let itemShow = useParams().productID;

  useEffect(() => {
    setItemDetails(Products.find((e) => e._id === itemShow));
  }, [itemShow]);

  const Sizes = [
    {
      id: 1,
      name: "regular",
      price: itemDetails?.Price - 50,
      counter: counter0,
      setCounter: setCounter0,
    },
    {
      id: 2,
      name: "medium",
      price: itemDetails?.Price,
      counter: counter1,
      setCounter: setCounter1,
    },
    {
      id: 3,
      name: "large",
      price: itemDetails?.Price + 50,
      counter: counter2,
      setCounter: setCounter2,
    },
  ];

  const total = Sizes[0].price * Sizes[0].counter + Sizes[1].price * Sizes[1].counter + Sizes[2].price * Sizes[2].counter;

  return (
    <React.Fragment>
      <Bags />
      {itemDetails && (
      <>
        <div className="products product-board">
          <div className="product-card" key={itemDetails._id}>
            <img className="product-image" src={itemDetails.Image} alt={itemDetails.Name} loading="lazy" />
            <div className="product-info">
              <h5 className="product-name">{itemDetails.Name}</h5>
              <p className="product-price">&#x20B9;{itemDetails.Price}</p>
              <div className="product-star">
                <AiFillStar id="A" />
                <p className="product-rating">{itemDetails.Star?.toFixed(1)}/5.0</p>
              </div>
            </div>
          </div>
          <div className="product-board-desc">
            <h1>
              {itemDetails.Name}
              {itemDetails.type === "Veg" ? <img id="veg" src={Veg} alt="Veg" /> : <LuVegan id="LuVegan" />}
            </h1>
            <p>{itemDetails.Desc}</p>
            <div className="product-board-sizes">
              <h2>Select Sizes</h2>
              <div className="sizes">
                {Sizes.map((size) => {
                  return (
                    <div id={size.name} key={size.id}>
                      <img src={itemDetails.Image} alt={itemDetails.Name} />
                      <p>{size.name}</p>
                      <p className="product-price">&#x20B9;{size.price}</p>
                      <div className="counter">
                        <button
                          className="btn btn--minus"
                          onClick={() => {
                            size.counter > 0 ? size.setCounter(size.counter - 1) : size.setCounter(size.counter);
                          }}>
                          <TiMinus />
                        </button>
                        <p>{size.name}</p>
                        <span>{size.counter}</span>
                        <button className="btn btn--plus" onClick={() => (size.counter < 9 ? size.setCounter(size.counter + 1) : size.setCounter(size.counter))}>
                          <TiPlus />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div id="totalorder">
                <div className="total">
                  <h1>Total Amount &#x20B9; {total}</h1>
                </div>
                <button className="order">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* <CustomerReview /> */}
        {/* <Footer /> */}
      </>
      )}
    </React.Fragment>
  );
};

export default ProductPage;
