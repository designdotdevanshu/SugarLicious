import {useState} from "react";
import {BiSearch} from "react-icons/bi";
import {RiArrowDropDownLine} from "react-icons/ri";
import {MdClose, MdFilterList} from "react-icons/md";
import {Products} from "../../Data/ProductsJSON";
import {NavLink} from "react-router-dom";
import Filter from "./Filter";

const SearchBar = ({position, currPlace, bgColor}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchOutput, setsearchOutput] = useState();
  const [showFilterBox, setShowFilterBox] = useState(false);

  // For filter
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
      {/* <div id="SearchBar" style={{marginTop: `${-position}px`}}> */}
      <div id="SearchBar" style={{marginTop: `${-position}px`, backgroundColor: `${bgColor}`, borderColor: "black"}}>
        <BiSearch id="SearchICON" />
        <input type="text" placeholder="SEARCH PRODUCT HERE....." onChange={handleInput} />
        <div id="Filter">
          <div id="fliterTEXT" onClick={() => setShowFilterBox(!showFilterBox)}>
            <p>FILTER</p>
            <RiArrowDropDownLine />
          </div>
          <div>
            <MdFilterList id="fliterTEXT" />
          </div>
        </div>
      </div>
      <Filter showFilterBox={showFilterBox} setShowFilterBox={setShowFilterBox} />
      <div id="SearchProductsContainer">
        {searchOutput?.map((curr, id) => {
          let a;
          currPlace === "home" ? (a = `/products/${curr.Category}/${curr._id}`) : (a = `/products/${curr.Category}/${curr._id}`);
          return (
            <div id="SearchProducts" key={curr.Category + id}>
              <NavLink to={a}>
                <div onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
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
