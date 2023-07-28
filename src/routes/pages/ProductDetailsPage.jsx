import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Products} from "../../Data/ProductsJSON";
import Bags from "../../components/Common/Bags";
import ProductPage from "../../components/Products/ProductPage";
import CustomerReview from "../../components/Landing/CustomerReview/CustomerReview";
import Footer from "../../components/Footer/Footer";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import Header from "../../components/Header/Header";

const ProductDetailsPage = () => {
  const [itemDetails, setItemDetails] = useState({});
  let itemShow = useParams().productID;
  useEffect(() => {
    setItemDetails(Products.find((e) => e._id === itemShow));
  }, [itemShow]);
  return (
    <>
      <Header />
      <Bags />
      {itemDetails && <ProductPage /> ? (
        <>
          <ProductPage />
          <CustomerReview />
        </>
      ) : (
        <PageNotFound />
      )}
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
