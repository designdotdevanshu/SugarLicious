import React from "react";
import Slider from "../../components/Landing/SliderImage/Slider";
import SearchBar from "../../components/Common/SearchBar";
import Frontproducts from "../../components/Landing/HomeProducts/HomeProducts";
import CustomerReview from "../../components/Landing/CustomerReview/CustomerReview";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider />
      <SearchBar position="22" />
      <Frontproducts />
      <CustomerReview />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
