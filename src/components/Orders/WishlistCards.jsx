import Image1 from "../../assets/Beverages/image (1).png";
import {IoMdClose} from "react-icons/io";

const WishlistCards = () => {
  return (
    <div id="WishList-Card">
      <img src={Image1} alt="ImageProduct" />
      <div id="productDesc">
        <h2>LATTE COFFEE</h2>
        <p>Two Regular lattee coffee and one medium lattee coffee delivered within 2 hours. Two Regular lattee coffee and one medium lattee coffee delivered within 2 hours. Two Regular lattee coffee and one medium lattee coffee delivered within 2 hours.</p>
      </div>
      <h1>$150</h1>
      <IoMdClose id="IconClose" />
      <button>Add to Bag</button>
    </div>
  );
};

export default WishlistCards;
