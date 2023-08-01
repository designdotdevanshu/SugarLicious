import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Products} from "../../Data/ProductsJSON";
import Bags from "../../components/Common/Bags";
import ProductPage from "../../components/Products/ProductPage";
import CustomerReview from "../../components/Landing/CustomerReview/CustomerReview";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import Layout from "../../components/Layout/Layout";

const ProductDetailsPage = () => {
  const [itemDetails, setItemDetails] = useState({});
  let itemShow = useParams().productID;
  useEffect(() => {
    setItemDetails(Products.find((e) => e._id === itemShow));
  }, [itemShow]);
  return (
    <>
      <Layout>
        <Bags />
        {itemDetails && <ProductPage /> ? (
          <>
            <ProductPage />
            <CustomerReview />
          </>
        ) : (
          <PageNotFound />
        )}
      </Layout>
    </>
  );
};

export default ProductDetailsPage;
