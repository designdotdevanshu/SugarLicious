import {IoMdClose} from "react-icons/io";

const WishlistCards = ({product, orderData, userData, setUserData}) => {
  const removeFromWishlist = (_id) => {
    let a = userData.Wishlist.filter((e) => e._id !== _id);
    setUserData({...userData, Wishlist: a});
  };

  const addToBag = (_id) => {
    if (_id) {
      let b = userData?.Bag?.find((e) => e._id === _id);
      if (!b) {
        let a = [...userData.Bag, {_id, SmallCount: "0", MediumCount: "1", LargeCount: "0"}];
        setUserData({...userData, Bag: a});
      }
    }
  };

  return (
    <div id="WishList-Card">
      <img src={product.Image} alt="ImageProduct" />
      <div id="productDesc">
        <h2>{product.Name}</h2>
        <p>{product.Desc.slice(0, 180)}...</p>
      </div>
      <h1>₹{product.Price}</h1>
      <IoMdClose id="IconClose" onClick={() => removeFromWishlist(orderData._id)} />
      <button onClick={() => addToBag(orderData._id)}>Add to Bag</button>
    </div>
  );
};

export default WishlistCards;
