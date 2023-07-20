import React from "react";
import {BiSearch, BiStar} from "react-icons/bi";
import {RiArrowDropDownLine, RiStarFill} from "react-icons/ri";
import {MdFilterList} from "react-icons/md";
import {MdClose} from "react-icons/md";
import {useState} from "react";
import {Products} from "../../Data/ProductsJSON";
import Image1 from "../../assets/Beverages/image (1).png";
// window.addEventListener("scroll", () => {
// const SearchBar = document.getElementById("SearchBar");
// if (window.scrollY > 460) {
//   SearchBar.style.position = "fixed";
//   SearchBar.style.width = "95vw";
//   SearchBar.style.top = "91px";
//   SearchBar.style.left = 0;
//   SearchBar.style.right = 0;
//   SearchBar.style.transition = "width 0.5s";
// } else {
//   SearchBar.style.position = "relative";
//   SearchBar.style.width = "80vw";
//   SearchBar.style.top = "0px";
//   SearchBar.style.left = 0;
//   SearchBar.style.right = 0;
//   SearchBar.style.transition = "width 0.2s";
// }
// });

// import P

const SearchBar = ({position}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchOutput, setsearchOutput] = useState();
  const handleInput = (input) => {
    let value = input.target.value.toLowerCase();
    let a;
    value.length > 0
      ? (a = Products.filter((product) => {
          return product.Name.toLowerCase().includes(value) || product.Category.toLowerCase().includes(value);
        }))
      : (a = []);
    setsearchOutput(a);
  };
  return (
    <div id="SearchBarContainer">
      <div id="SearchBar" style={{marginTop: `-${position}px`}}>
        <BiSearch id="SearchICON" />
        <input type="text" placeholder="SEARCH PRODUCT HERE....." onChange={handleInput} />
        <div id="Filter">
          <div id="fliterTEXT">
            <p>FILTER</p>
            <RiArrowDropDownLine />
          </div>
          <MdFilterList id="fliterTEXT" />
        </div>
      </div>
      <div id="SearchProductsContainer">
        {searchOutput?.map((curr) => {
          return (
            <div id="SearchProducts">
              <div>
                <img src={curr.Image} alt={curr.Name} />
                <p>{curr.Name}</p>
              </div>
              <MdClose />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
