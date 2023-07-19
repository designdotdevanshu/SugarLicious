import React from "react";
import { Products } from "../../Data/ProductsJSON";
import SearchBar from "../Common/SearchBar";
import { AiFillStar, AiFillHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Bags from "../Common/Bags";

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

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [cardPerPage,setCardPerPage] = useState(18);
  const [category, setCategory] = useState(useParams());
  const [count, setCount] = useState(0);

  let lastIndex = currPage * cardPerPage;
  let firstIndex = lastIndex - cardPerPage;

  useEffect(() => {
    let a;
    Object.keys(category).length > 0 ?
      a = Products.filter(e => e.Category === category.productID || e._id === category.productID  )
      :
      a = Products
    setProducts(a);
    shuffleArray(Products);
    console.log(Products);
  }, [category])

  let pages = [];
  for (let i = 1; i <= Math.ceil(products.length / cardPerPage); i++) {
    pages.push(i);
  }

  return (
    <React.Fragment>
      <Bags />
      <SearchBar position="100" />
      <div className="products">
        {products.slice(firstIndex,lastIndex).map((product) => {
          // console.log(products)
          return (
            <div className="product-card" key={product._id}>
              <img
                src={product.Image}
                alt={product.Name}
                className="product-image"
              />
              <div id="product-heart">
                <AiFillHeart />
              </div>
              <div className="product-info">
                <h5 className="product-name">{product.Name}</h5>
                <p className="product-desc">{product.Desc.slice(0, 50)}...</p>
                <p className="product-price">&#x20B9;{product.Price}</p>
                <div id="rating">
                  <AiFillStar id="A" />
                  <p className="product-rating">{product.Star}/5.0</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div id="pagination">
        {
          pages.length > 1 &&
          <>
            <div className="Pages" onClick={() => {
              setCount(count - 18);
              setCurrPage(currPage - 1);
            }}><AiOutlineLeft /></div>

            {
              pages.map((curr, ids) => {
                // console.log(pages);
                return (
                  <div onClick={() => { setCount(curr); setCurrPage(ids + 1) }} className={ids + 1 === currPage ? "activePage Pages" : "Pages"}>{ids + 1}</div>
                )
              })
            }
            <div className="Pages" onClick={() => {
              setCount(count + 18);
              setCurrPage(currPage + 1);
            }}><AiOutlineRight /></div>
          </>
        }
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProductPage;