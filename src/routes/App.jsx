import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrdersPage from "./pages/OrdersPage";
import ContactPage from "./pages/ContactPage";
import ReserveSeatPage from "./pages/ReserveSeatPage";
import Login from "../components/Signin_Register/Login";
import Register from "../components/Signin_Register/Register";
import Preloader from "../components/Common/Preloader";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Products" element={<ProductsPage />} />
        <Route exact path="/Products/:categoryID/:productID" element={<ProductDetailsPage />} />
        <Route exact path="/Products/:categoryID" element={<ProductsPage />} />
        <Route exact path="/Orders" element={<OrdersPage />} />
        <Route exact path="/ReserveSeat" element={<ReserveSeatPage />} />
        <Route exact path="/Contact" element={<ContactPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="*" element={<Preloader />} />

      </Routes>
    </Router>
  );
};
export default App;
