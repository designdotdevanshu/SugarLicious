import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "../components/Products/ProductPage";
import Contact from "../components/Contact/Contact";
import ReserveSeat from "../components/ReserveSeat/ReserveSeat";
import ProductShow from "../components/Products/ProductShow";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Products/:categoryID/:productID" element={<ProductShow />} />
          <Route exact path="/Products" element={<ProductPage />} />
          <Route exact path="/Products/:categoryID" element={<ProductPage />} />
          <Route path="/ReserveSeat" element={<ReserveSeat />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
