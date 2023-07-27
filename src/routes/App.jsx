import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrdersPage from "./pages/OrdersPage";
import ContactPage from "./pages/ContactPage";
import ReserveSeatPage from "./pages/ReserveSeatPage";
import Login from "../components/Signin_Register/Login";
import Register from "../components/Signin_Register/Register";
import PageNotFound from "../components/Common/PageNotFound";
import Filter from "../components/Common/Filter.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="*" element={<PageNotFound />} />
        <Route exact path="/SugarLicious" element={<HomePage />} />
        <Route exact path="/SugarLicious/products" element={<ProductsPage />} />
        <Route exact path="/SugarLicious/products/:categoryID/:productID" element={<ProductDetailsPage />} />
        <Route exact path="/SugarLicious/products/:categoryID" element={<ProductsPage />} />
        <Route exact path="/SugarLicious/orders" element={<OrdersPage />} />
        <Route exact path="/SugarLicious/reserveSeat" element={<ReserveSeatPage />} />
        <Route exact path="/SugarLicious/Contact" element={<ContactPage />} />
        <Route exact path="/SugarLicious/login" element={<Login />} />
        <Route exact path="/SugarLicious/register" element={<Register />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </Router>
  );
};
export default App;
