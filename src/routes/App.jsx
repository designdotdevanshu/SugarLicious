import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "../components/Products/ProductPage";
import Contact from "../components/Contact/Contact";
import ReserveSeat from "../components/ReserveSeat/ReserveSeat";
import Orders from "../components/Orders/Orders";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/Products" element={<ProductPage />} />
          <Route path="/ReserveSeat" element={<ReserveSeat />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
