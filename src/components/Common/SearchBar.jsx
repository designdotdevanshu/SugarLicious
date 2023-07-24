import React from "react";
import {BiSearch, BiStar} from "react-icons/bi";
import {RiArrowDropDownLine, RiStarFill} from "react-icons/ri";
import {MdFilterList} from "react-icons/md";
import {MdClose} from "react-icons/md";
import {useState} from "react";
import {Products} from "../../Data/ProductsJSON";
import {NavLink} from "react-router-dom";

const SearchBar = ({position, currPlace}) => {
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
      <div id="SearchBar" style={{marginTop: `${-position}px`}}>
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
          let a;
          currPlace === "home" ? (a = `./products/${curr.Category}/${curr._id}`) : (a = `./${curr.Category}/${curr._id}`);
          return (
            <div id="SearchProducts">
              <NavLink to={a}>
                <div>
                  <img src={curr.Image} alt={curr.Name} />
                  <p>{curr.Name}</p>
                </div>
              </NavLink>
              <MdClose />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
