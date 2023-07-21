import React from "react";
import { Products } from "../../Data/ProductsJSON";
import { AiFillStar } from "react-icons/ai";
import { TiMinus, TiPlus } from "react-icons/ti";
import { LuVegan } from "react-icons/lu";
import CustomerReview from "../Landing/CustomerReview/CustomerReview";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Bags from "../Common/Bags";


// let curr = Math.floor(Math.random() * Products.length) + 1;
// Products[curr]._id = curr;



const ProductShow = () => {
  const [itemDetails, setItemDetails] = useState({});
  // let [total, setTotal] = useState([]);
  // let [sizes, setSizes] = useState([]);
  let itemShow = useParams().productID;
  // let , sizes;
  useEffect(() => {
    // let curr = Products.find(e => e._id === itemShow);
    // console.log(Products.find(e => e._id === itemShow));
    setItemDetails(Products.find(e => e._id === itemShow));
    // setSizes([
    //   {
    //     name: "Regular",
    //     price: itemDetails.Price - 50,
    //     counter: 0,
    //   },
    //   {
    //     name: "Medium",
    //     price: itemDetails.Price,
    //     counter: 0,
    //   },
    //   {
    //     name: "Large",
    //     price: itemDetails.Price + 50,
    //     counter: 0,
    //   },
    // ]);
    // setTotal(sizes[0].price * sizes[0].counter + sizes[1].price * sizes[1].counter + sizes[2].price * sizes[2].counter);
  }, []);

  // console.log(itemShow);
  return (
    <React.Fragment>
      <Bags />
      {
        itemDetails && 
        <>
      <div className="products product-board">
        <div className="product-card" key={itemDetails._id}>
          <img className="product-image" src={itemDetails.Image} alt={itemDetails.Name} loading="lazy" />
          <div className="product-info">
            <h5 className="product-name">{itemDetails.Name}</h5>
            <p className="product-price">&#x20B9;{itemDetails.Price}</p>
            <div className="product-star">
              <AiFillStar id="A" />
              <p className="product-rating">{itemDetails.Star}/5.0</p>
            </div>
          </div>
        </div>
        <div className="product-board-desc">
          <h1>
            {itemDetails.Name}
            <LuVegan id="LuVegan" />
          </h1>
          <p>{itemDetails.Desc}</p>
          <div className="product-board-sizes">
            <h2>Select Sizes</h2>
                <div className="sizes">
                  <div className="regular">
                    <img src={itemDetails.Image} alt={itemDetails.Name} />
                    <p>REGULAR</p>
                    <p className="product-price">&#x20B9;{itemDetails.Price - 100}</p>
                    <div className="counter">
                      <button className="btn btn--minus">
                        <TiMinus />
                      </button>
                      <p>SMALL 0</p>
                      <button className="btn btn--plus">
                        <TiPlus />
                      </button>
                    </div>
                  </div>
                  <div className="medium">
                    <img src={itemDetails.Image} alt={itemDetails.Name} />
                    <p>MEDIUM</p>
                    <p className="product-price">&#x20B9;{itemDetails.Price}</p>
                    <div className="counter">
                      <button className="btn btn--minus">
                        <TiMinus />
                      </button>
                      <p>MEDIUM 0</p>
                      <button className="btn btn--plus">
                        <TiPlus />
                      </button>
                    </div>
                  </div>
                  <div className="large">
                    <img src={itemDetails.Image} alt={itemDetails.Name} />
                    <p>LARGE</p>
                    <p className="product-price">&#x20B9;{itemDetails.Price + 200}</p>
                    <div className="counter">
                      <button className="btn btn--minus">
                        <TiMinus />
                      </button>
                      <p>LARGE 0</p>
                      <button className="btn btn--plus">
                        <TiPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div id="totalorder">
                  <div className="total">
                    <h1>
                      Total Amount &#x20B9; {itemDetails*2}
                    </h1>
                  </div>
                  <button className="order">Order Now</button>
                </div>
          </div>
        </div>
      </div>
      <CustomerReview />
      <Footer />
        </>
      }
    </React.Fragment>
  );
};

export default ProductShow;
