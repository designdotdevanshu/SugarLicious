/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState} from "react";
import {AiFillStar, AiOutlineCheck, AiOutlineClose, AiOutlineLeft, AiOutlineUp} from "react-icons/ai";
import {BiCheck, BiSolidCircle} from "react-icons/bi";
import {BsCheckLg} from "react-icons/bs";

const Filter = ({showFilterBox, setShowFilterBox}) => {
  const [showFilters, setShowFilters] = useState(1);
  // const [showFilterBox, setShowFilterBox] = useState(false);
  return (
    <>
      {showFilterBox ? (
        <div className="filter">
          <div className="filter-box">
            <div className="filter-header header-flex">
              <AiOutlineLeft className="AiOutlineLeft" onClick={() => setShowFilterBox(!showFilterBox)} />
              <h3>Filter</h3>
              <p className="filter-header-reset">Reset</p>
            </div>

            <div className="filter-selections">
              <button className="filter-selections-btn">
                <BiSolidCircle className="BiSolidCircle" />
                <p>Muffins</p>
                <AiOutlineClose className="AiOutlineClose" />
              </button>
            </div>

            <div className="filter-category">
              <div className="filter-category-header header-flex">
                <p>Category</p>
                <AiOutlineUp className="AiOutlineUp" />
              </div>
              <div className="filter-category-wrapper">
                <button className="filter-category-wrapper-selections">
                  <BiSolidCircle className="BiSolidCircle" />
                  <p>Muffins</p>
                  <BsCheckLg className="AiOutlineCheck" />
                </button>
              </div>
            </div>

            <div id="ingredients" className="filter-category">
              <div id="ingredients-header" className="filter-category-header header-flex">
                <p>Ingredients</p>
                <AiOutlineUp className="AiOutlineUp" />
              </div>
              <div className="filter-category-wrapper">
                <button id="veg" className="filter-category-wrapper-selections">
                  <BiSolidCircle className="BiSolidCircle" />
                  <p>Vegetarian</p>
                  <BsCheckLg className="AiOutlineCheck" />
                </button>
                <button id="vegan" className="filter-category-wrapper-selections">
                  <BiSolidCircle className="BiSolidCircle" />
                  <p>Vegan</p>
                  <BsCheckLg className="AiOutlineCheck" />
                </button>
              </div>
            </div>

            <div className="filter-price">
              <div className="filter-price-header header-flex">
                <p>Price Range</p>
                <p>
                  <span>$0 - $1000</span>
                  <AiOutlineUp className="AiOutlineUp" />
                </p>
              </div>
              <div className="filter-price-range">
                <input type="range" name="hello" id="" />
              </div>
            </div>

            <div className="filter-review">
              <div className="filter-review-header header-flex">
                <p>Customer Review</p>
                <AiOutlineUp className="AiOutlineUp" />
              </div>
              <div className="filter-review-wrapper">
                <div className="filter-review-subwrapper">
                  <label htmlFor="h">
                    <span>
                      {Array(4)
                        .fill()
                        .map((_, i) => (
                          <AiFillStar key={i} />
                        ))}
                    </span>
                  </label>
                  <p htmlFor="h">& up</p>
                  <input type="radio" name="" id="h" />
                </div>
                <div className="filter-review-subwrapper">
                  <label htmlFor="h">
                    <span>
                      {Array(3)
                        .fill()
                        .map((_, i) => (
                          <AiFillStar key={i} />
                        ))}
                    </span>
                  </label>
                  <p>& up</p>
                  <input type="radio" name="" id="h" />
                </div>
                <div className="filter-review-subwrapper">
                  <label htmlFor="h">
                    <span>
                      {Array(2)
                        .fill()
                        .map((_, i) => (
                          <AiFillStar key={i} />
                        ))}
                    </span>
                  </label>
                  <p>& up</p>
                  <input type="radio" name="" id="h" />
                </div>
                <div className="filter-review-subwrapper">
                  <label htmlFor="h">
                    <span>
                      {Array(1)
                        .fill()
                        .map((_, i) => (
                          <AiFillStar key={i} />
                        ))}
                    </span>
                  </label>
                  <p>& up</p>
                  <input type="radio" name="" id="h" />
                </div>
              </div>
            </div>
          </div>
          <div className="filter-box-btn">
            <button>Show 20 results</button>
          </div>
        </div>
      ) : (
        setShowFilterBox(showFilterBox)
      )}
    </>
  );
};

export default Filter;
