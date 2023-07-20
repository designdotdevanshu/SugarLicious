import React from "react";
import {Products} from "../../Data/ProductsJSON";
import {AiFillStar} from "react-icons/ai";
import {TiMinus, TiPlus} from "react-icons/ti";
import {LuVegan} from "react-icons/lu";
import CustomerReview from "../Landing/CustomerReview/CustomerReview";
import Footer from "../Footer/Footer";

let curr = Math.floor(Math.random() * Products.length) + 1;
Products[curr]._id = curr;

const sizes = [
  {
    name: "Regular",
    price: Products[curr].Price - 50,
    counter: 0,
  },
  {
    name: "Medium",
    price: Products[curr].Price,
    counter: 0,
  },
  {
    name: "Large",
    price: Products[curr].Price + 50,
    counter: 0,
  },
];

const total = sizes[0].price * sizes[0].counter + sizes[1].price * sizes[1].counter + sizes[2].price * sizes[2].counter;

const Orders = () => {
  return (
    <React.Fragment>
      <div className="product-board products">
        <div className="product-card" key={Products[curr]._id}>
          {/* <h1>{Products[curr]._id === 8 ? Products[curr].Name : null}</h1> */}
          <img className="product-image" src={Products[curr].Image} alt={Products[curr].Name} loading="lazy" />
          <div className="product-info">
            <h5 className="product-name">{Products[curr].Name}</h5>
            {/* <p className="product-desc">{Products[curr].Desc.slice(0, 50)}...</p> */}
            <div className="product-price-wrapper">
              <p className="product-price">&#x20B9;{Products[curr].Price}</p>
              <AiFillStar id="A" />
              <p className="product-rating">{Products[curr].Star}/5.0</p>
            </div>
          </div>
        </div>
        <div className="product-board-desc">
          <h1>
            {Products[curr].Name}
            <LuVegan id="LuVegan" />
          </h1>
          <p>{Products[curr].Desc}</p>
          <div className="product-board-sizes">
            <h2>Select Sizes</h2>
            <div className="sizes">
              <div className="regular">
                <img src={Products[curr].Image} alt={Products[curr].Name} />
                <p>{sizes[0].name}</p>
                <p className="product-price">&#x20B9;{sizes[0].price}</p>
                <div className="counter">
                  <button className="btn btn--minus">
                    <TiMinus />
                  </button>
                  <p>{sizes[0].name}</p>
                  <span>{sizes[0].counter}</span>
                  <button className="btn btn--plus">
                    <TiPlus />
                  </button>
                </div>
              </div>
              <div className="medium">
                <img src={Products[curr].Image} alt={Products[curr].Name} />
                <p>{sizes[1].name}</p>
                <p className="product-price">&#x20B9;{sizes[1].price}</p>
                <div className="counter">
                  <button className="btn btn--minus">
                    <TiMinus />
                  </button>
                  <p>{sizes[1].name}</p>
                  <span>{sizes[1].counter}</span>
                  <button className="btn btn--plus">
                    <TiPlus />
                  </button>
                </div>
              </div>
              <div className="large">
                <img src={Products[curr].Image} alt={Products[curr].Name} />
                <p>{sizes[2].name}</p>
                <p className="product-price">&#x20B9;{sizes[2].price}</p>
                <div className="counter">
                  <button className="btn btn--minus">
                    <TiMinus />
                  </button>
                  <p>{sizes[2].name}</p>
                  <span>{sizes[2].counter}</span>
                  <button className="btn btn--plus">
                    <TiPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className="total">
              <h1>
                Total Amount <span>&#x20B9;{total}</span>
              </h1>
            </div>
            <button className="order">Order Now</button>
          </div>
        </div>
      </div>
      <CustomerReview />
      <Footer />
    </React.Fragment>
  );
};

export default Orders;
