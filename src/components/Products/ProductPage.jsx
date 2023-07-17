import React from "react";
import {Products} from "../../Data/ProductsJSON";
import SearchBar from "../Common/SearchBar";

// let x = document.getElementById("products");
// x.addEventListener("click", () => {
//   const SearchBar = document.getElementById("SearchBar");
//   SearchBar.style.position = "fixed";
//   SearchBar.style.width = "100vw";
//   SearchBar.style.top = "91px";
//   SearchBar.style.left = 0;
//   SearchBar.style.right = 0;
//   SearchBar.style.transition = "width 0.5s";
// });

const ProductPage = () => {
  return (
    <React.Fragment>
      {Products.map((curr) => {
        return (
          <div className="products" key={null}>
            <SearchBar position="30" />
            {curr.map((product) => {
              return (
                <div className="product-card" key={product._id}>
                  <img
                    src={product.Image}
                    alt={product.Name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h5 className="product-name">{product.Name}</h5>
                    <p className="product-desc">
                      {product.Desc.slice(0, 50)}...
                    </p>
                    <div className="product-price-wrapper">
                      <p className="product-price">&#x20B9;{product.Price}</p>
                      <p className="product-rating">{product.Star}/5.0</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProductPage;
