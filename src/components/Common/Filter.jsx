import {useEffect, useRef, useState} from "react";
import {AiFillStar, AiOutlineCheck, AiOutlineLeft} from "react-icons/ai";
import {IoIosArrowBack} from "react-icons/io";
import {BiCheck, BiSolidCircle} from "react-icons/bi";
import {RiCloseFill, RiArrowDropUpLine} from "react-icons/ri";
import {GiCheckMark} from "react-icons/gi";
import {Link, useLocation, useNavigate} from "react-router-dom";
// import RangeSlider from "re"
import Image1 from "../../assets/Muffins/Image (1).png";
import Image2 from "../../assets/Beverages/Image (1).png";
import Image3 from "../../assets/Pizza/Image (1).png";
import Image4 from "../../assets/Snacks/Image (1).png";
import Image5 from "../../assets/Beverages/Image (8).png";

import Veg from "../../assets/veg.png";
import Vegan from "../../assets/Vegan.webp";

const FilterData = [
  {
    Topic: "Category",
    subTopic: [
      {
        image: Image1,
        text: "Muffins",
        apiName: "Muffins",
      },
      {
        image: Image2,
        text: "Beverages",
        apiName: "Beverages",
      },
      {
        image: Image3,
        text: "Pizza",
        apiName: "Pizza",
      },
      {
        image: Image4,
        text: "Snacks and Sides",
        apiName: "SnacksAndSides",
      },
      {
        image: Image5,
        text: "Smoothie & Ice Cream",
        apiName: "Smoothie",
      },
    ],
  },
  {
    Topic: "Ingredients",
    subTopic: [
      {
        image: Veg,
        text: "Vegetarian",
        apiName: "Veg",
      },
      {
        image: Vegan,
        text: "Vegan",
        apiName: "Vegan",
      },
    ],
  },
];

const Filter = ({showFilterBox, setShowFilterBox}) => {
  const [showFilter, setshowFilter] = useState({
    Category: [],
    Ingredients: [],
    PriceRange: 599,
    RatingUP: 1,
  });
  const ref = useRef(null);
  const navigate = useNavigate();
  const showFilterProduct = () => {
    navigate("/SugarLicious/products", {state: showFilter});
    setShowFilterBox(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowFilterBox(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [showFilterBox]);

  return (
    <>
      {showFilterBox ? (
        <div className="filter">
          <div className="box">
            <div className="header">
              <IoIosArrowBack className="ArrowBack" onClick={() => setShowFilterBox(!showFilterBox)} />
              <h3>Filter</h3>
              <p
                className="reset"
                onClick={() =>
                  setshowFilter({
                    Category: [],
                    Ingredients: [],
                  })
                }>
                Reset
              </p>
            </div>
            {FilterData.map((curr, id) => {
              return (
                <div className="category" key={curr + id}>
                  <div className="topic">
                    <h4>{curr.Topic}</h4>
                    <RiArrowDropUpLine className="show-More" />
                  </div>
                  <div className="category-topic-container">
                    {curr.subTopic.map((subtext) => {
                      return (
                        <button
                          className="category-topic"
                          key={subtext.text}
                          id={showFilter.Category.concat(showFilter.Ingredients).find((e) => e.text === subtext.text) ? "active" : ""}
                          onClick={() => {
                            let Category;
                            if (curr.Topic === "Category") {
                              let Category;
                              showFilter?.Category?.find((e) => e.text === subtext.text) && showFilter.Category.length > 0 ? (Category = showFilter.Category.filter((e) => e.text !== subtext.text)) : (Category = [...showFilter.Category, subtext]);
                              setshowFilter({...showFilter, Category});
                            }
                            if (curr.Topic === "Ingredients") {
                              let Ingredients;
                              showFilter?.Ingredients?.find((e) => e.text === subtext.text) && showFilter.Ingredients.length > 0 ? (Ingredients = showFilter.Ingredients.filter((e) => e.text !== subtext.text)) : (Ingredients = [...showFilter.Ingredients, subtext]);
                              setshowFilter({...showFilter, Ingredients});
                            }
                          }}>
                          <img src={subtext.image} alt="muffinsImage" id="filterProductImage" />
                          <p>{subtext.text}</p>
                          {showFilter.Category.concat(showFilter.Ingredients).find((e) => e.text === subtext.text) && <GiCheckMark className="checkLOGO" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="category">
              <div className="topic">
                <h4>Price Range</h4>
                <div>
                  <p>&#x20B9;80 - &#x20B9;{showFilter.PriceRange}</p>
                  <RiArrowDropUpLine className="show-More" />
                </div>
              </div>
              <input
                type="range"
                name="price"
                id="price"
                min="80"
                defaultValue={showFilter.PriceRange}
                max="599"
                onChange={(e) => {
                  setshowFilter({...showFilter, PriceRange: e.target.value});
                }}
              />
            </div>

            <div className="category">
              <div className="topic">
                <h4>Customer Review</h4>
                <RiArrowDropUpLine className="show-More" />
              </div>
              <div className="review-wrapper">
                <div className="subwrapper">
                  <label htmlFor="4Star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <p>& up</p>
                  </label>
                  <input type="radio" name="Star" id="4Star" onClick={() => setshowFilter({...showFilter, RatingUP: 4})} />
                </div>
                <div className="subwrapper">
                  <label htmlFor="3Star">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <p>& up</p>
                  </label>
                  <input type="radio" name="Star" id="3Star" onClick={() => setshowFilter({...showFilter, RatingUP: 3})} />
                </div>
                <div className="subwrapper">
                  <label htmlFor="2Star">
                    <AiFillStar />
                    <AiFillStar />
                    <p>& up</p>
                  </label>
                  <input type="radio" name="Star" id="2Star" onClick={() => setshowFilter({...showFilter, RatingUP: 2})} />
                </div>
                <div className="subwrapper">
                  <label htmlFor="1Star">
                    <AiFillStar />
                    <p>& up</p>
                  </label>
                  <input type="radio" name="Star" id="1Star" defaultChecked onClick={() => setshowFilter({...showFilter, RatingUP: 1})} />
                </div>
              </div>
            </div>
          </div>

          <div className="selections">
            {showFilter.Category.concat(showFilter.Ingredients).map((curr, id) => {
              return (
                <button className="btn" key={curr.text + id}>
                  <img src={curr.image} alt="muffinsImage" />
                  <p>{curr.text}</p>
                  <RiCloseFill
                    className="CutBTN"
                    onClick={() => {
                      showFilter.Category.find((e) => e.text === curr.text) ? setshowFilter({Ingredients: showFilter.Ingredients, Category: [...showFilter.Category.filter((e) => e.text !== curr.text)]}) : setshowFilter({Category: showFilter.Category, Ingredients: [...showFilter.Ingredients.filter((e) => e.text !== curr.text)]});
                    }}
                  />
                </button>
              );
            })}
          </div>
          <button className="showResult" onClick={showFilterProduct}>
            Show results
          </button>
        </div>
      ) : (
        setShowFilterBox(showFilterBox)
      )}
    </>
  );
};

export default Filter;
