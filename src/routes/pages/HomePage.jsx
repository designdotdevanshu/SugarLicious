import Slider from "../../components/Landing/SliderImage/Slider";
import SearchBar from "../../components/Common/SearchBar";
import Frontproducts from "../../components/Landing/HomeProducts/HomeProducts";
import CustomerReview from "../../components/Landing/CustomerReview/CustomerReview";
import Layout from "../../components/Layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Slider />
        <SearchBar position="-59" currPlace="home" />
        <Frontproducts />
        <CustomerReview />
      </Layout>
    </>
  );
};

export default HomePage;
