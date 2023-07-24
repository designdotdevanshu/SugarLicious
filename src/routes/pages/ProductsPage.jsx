import Bags from "../../components/Common/Bags";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsCatalogue from "../../components/Products/ProductsCatalogue";
import SearchBar from "../../components/Common/SearchBar";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <Bags />
      <SearchBar position="100" currPlace="ProductPage" />
      <ProductsCatalogue />
      <Footer />
    </>
  );
};

export default ProductsPage;
