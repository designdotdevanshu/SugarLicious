import {FrontJSON} from "../../../Data/FrontJSON.jsx";
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
                  products.type === "Product" ? (a = `./Products/${products.Category}/${products._id}`) : (a = `./Products/${products.Category}`);
                  return (
                    <div className="FrontProduct" key={ids2}>
                      <NavLink to={a} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
                        <img src={products.Image} />
                        <p>{products.Name}</p>
                      </NavLink>
                    </div>
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
