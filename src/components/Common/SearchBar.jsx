import React from "react";
import {BiSearch} from "react-icons/bi";
import {RiArrowDropDownLine} from "react-icons/ri";
import {MdFilterList} from "react-icons/md";

window.addEventListener("scroll", () => {
  const SearchBar = document.getElementById("SearchBar");
  if (window.scrollY > 460) {
    SearchBar.style.position = "fixed";
    SearchBar.style.width = "100vw";
    SearchBar.style.top = "91px";
    SearchBar.style.left = 0;
    SearchBar.style.right = 0;
    SearchBar.style.transition = "width 0.5s";
  } else {
    SearchBar.style.position = "relative";
    SearchBar.style.width = "80vw";
    SearchBar.style.top = 0;
    SearchBar.style.left = 0;
    SearchBar.style.right = 0;
    SearchBar.style.transition = "width 0.2s";
  }
});

const SearchBar = ({position}) => {
  return (
    <div id="SearchBar" style={{marginTop: `-${position}px`}}>
      <BiSearch id="SearchICON" />
      <input type="text" placeholder="SEARCH PRODUCT HERE....." />
      <div id="Filter">
        <div id="fliterTEXT">
          <p>FILTER</p>
          <RiArrowDropDownLine />
        </div>
        <MdFilterList id="fliterTEXT" />
      </div>
    </div>
  );
};

export default SearchBar;
