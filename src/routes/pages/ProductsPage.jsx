import Bags from "../../components/Common/Bags";
import ProductsCatalogue from "../../components/Products/ProductsCatalogue";
import SearchBar from "../../components/Common/SearchBar";
import Layout from "../../components/Layout/Layout";

const ProductsPage = () => {
  return (
    <>
      <Layout>
        <Bags />
        <SearchBar position="100" currPlace="ProductPage" />
        <ProductsCatalogue />
      </Layout>
    </>
  );
};

export default ProductsPage;
