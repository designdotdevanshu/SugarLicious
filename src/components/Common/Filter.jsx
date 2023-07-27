import {useState} from "react";
import {AiOutlineClose, AiOutlineRight} from "react-icons/ai";

const FilterTypes = [
  {
    id: 1,
    name: "Categories",
    options: ["Pizza", "Burger", "Sandwich", "Pasta", "Beverages", "Desserts"],
    input: [
      {
        type: "checkbox",
        name: "category",
      },
    ],
  },
  {
    id: 2,
    name: "Ingredients",
    options: ["Veg", "Vegan"],
    input: [
      {
        type: "checkbox",
        name: "ingredients",
      },
    ],
  },
  {
    id: 3,
    name: "Price",
    options: ["₹00 - ₹100", "₹100 - ₹200", "₹200 - ₹300", "₹300 - ₹400", "₹400 - ₹500", "Above ₹500"],
    input: [
      {
        type: "checkbox",
        name: "price",
      },
    ],
  },
  {
    id: 4,
    name: "Sort by",
    options: ["Price: Low to High", "Price: High to Low", "Rating: Low to High", "Rating: High to Low"],
    input: [
      {
        type: "radio",
        name: "sort",
      },
    ],
  },
  {
    id: 5,
    name: "Reviews",
    options: ["5 Stars & above", "4 Stars & above", "3 Stars & above", "2 Stars & above", "1 Stars & above"],
    input: [
      {
        type: "radio",
        name: "reviews",
      },
    ],
  },
];

const Filter = ({showFilterBox, setShowFilterBox}) => {
  const [showFilters, setShowFilters] = useState(1);
  // const [showFilterBox, setShowFilterBox] = useState(false);
  return (
    <>
      {/* <Header/>
      <SearchBar position="-70" currPlace="ProductPage" /> */}
      {showFilterBox ? (
        <div className="filter">
          <div className="filter-title">
            <h1>Filter by</h1>
            <div className="filter-title-close">
              <AiOutlineClose onClick={() => setShowFilterBox(!showFilterBox)} />
            </div>
          </div>
          <hr />
          <div className="filter-box">
            <div className="filter-box-left">
              {FilterTypes.map((type) => (
                <div className={showFilters === type.id ? "active filter-types-titles" : "filter-types-titles"} key={type.id} onClick={() => setShowFilters(type.id)}>
                  <div className="filter-types-title">
                    <p>{type.name}</p>
                  </div>
                  <div>
                    <AiOutlineRight id="AiOutlineRight" />
                  </div>
                </div>
              ))}
            </div>
            <div className="filter-box-right">
              {FilterTypes.map((type) => {
                return (
                  <div className="filter-types-options" key={type.id}>
                    {type.options.map((option) => {
                      return (
                        <div className="filter-types-options-item" key={option}>
                          {type.input.map((input) => {
                            return (
                              <div className="filter-types-options-item-input" key={input.name} style={showFilters === type.id ? {display: "block"} : {display: "none"}}>
                                <input type={input.type} name={input.name} id={option} className="checkmark" />
                                <label htmlFor={option}>{option}</label>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filter-box-btn">
            <button>Clear All</button>
            <button>Apply</button>
          </div>
        </div>
      ) : (
        setShowFilterBox(showFilterBox)
      )}
    </>
  );
};

export default Filter;
