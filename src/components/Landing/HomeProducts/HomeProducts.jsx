import React from "react";
import {FrontJSON, Reviews} from "../../../Data/FrontJSON.jsx";
import {NavLink} from "react-router-dom";
const Frontproducts = () => {
  return (
    <div id="Frontproducts">
      {FrontJSON.map((curr, ids1) => {
        return (
          <div key={ids1}>
            <h2>{curr.Title}</h2>
            <div className="ProductContainer">
              <div className="ProductInnerContainer">
                {curr.Products.map((products, ids2) => {
                  // console.log(products)
                  let a;
                  let ab = () => {
                    // alert(products);
                    // console.log(products);
                  };

                  products.type === "Product" ? (a = `/Products/${products._id}`) : (a = `/Products/${products.Category}`);
                  return (
                    <NavLink to={a}>
                      <div className="FrontProduct" key={ids2}>
                        <img src={products.Image} />
                        <p>{products.Name}</p>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Frontproducts;
