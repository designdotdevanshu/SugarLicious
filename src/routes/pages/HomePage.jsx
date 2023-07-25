import Slider from "../../components/Landing/SliderImage/Slider";
import SearchBar from "../../components/Common/SearchBar";
import Frontproducts from "../../components/Landing/HomeProducts/HomeProducts";
import CustomerReview from "../../components/Landing/CustomerReview/CustomerReview";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <SearchBar position="-59" currPlace="home" />
      <Frontproducts />
      <CustomerReview />
      <Footer />
    </>
  );
};

export default HomePage;
