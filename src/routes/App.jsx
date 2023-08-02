import {useState, createContext} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrdersPage from "./pages/OrdersPage";
import ContactPage from "./pages/ContactPage";
import ReserveSeatPage from "./pages/ReserveSeatPage";
import Login from "../components/Signin_Register/Login";
import Register from "../components/Signin_Register/Register";
import Preloader from "../components/Common/Preloader";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import ForgotPassword from "../components/Signin_Register/ForgotPassword";
import PrivacyAndPolicyPage from "./pages/PrivacyAndPolicyPage";
import AboutPage from "./pages/AboutPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

const Loading = createContext();
const UserData = createContext();
const Notification = createContext();

const App = () => {
  const [loadingScreen, setloadingScreen] = useState(false);
  const [userData, setUserData] = useState({
    Info: {Name: "Shubahm Joshi", Email: "perkybeans@gmail.com", Password: "11111111", logined: false},
    Wishlist: [
      {_id: "b7a11a2b", SmallCount: 1, MediumCount: 2, LargeCount: 2},
      {_id: "72743d51", SmallCount: 3, MediumCount: 0, LargeCount: 0},
    ],
    Bag: [
      {_id: "c4a9eb73", SmallCount: 1, MediumCount: 2, LargeCount: 2},
      {_id: "607fd102", SmallCount: 3, MediumCount: 0, LargeCount: 0},
    ],
    Orders: [
      {_id: "1c8d2fc3", SmallCount: 1, MediumCount: 2, LargeCount: 2},
      {_id: "b93d9e0b", SmallCount: 3, MediumCount: 0, LargeCount: 0},
      {_id: "26fdd41a", SmallCount: 1, MediumCount: 2, LargeCount: 2},
      {_id: "80be2cd7", SmallCount: 1, MediumCount: 2, LargeCount: 2},
    ],
  });

  const notification = (notiText, type) => {
    if (type === "Success") {
      toast.success(notiText, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if ((type = "Un-Success")) {
      toast.error(notiText, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if ((type = "Warning")) {
      toast.warn("🦄 Wow so easy!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <Loading.Provider value={setloadingScreen}>
      <Notification.Provider value={{notification: notification}}>
        <UserData.Provider value={{userData, setUserData}}>
          <ToastContainer />
          <Router>
            {loadingScreen && <Preloader />}
            <Routes>
              <Route exact path="/SugarLicious" element={<HomePage />} />
              <Route exact path="/SugarLicious/Products" element={<ProductsPage />} />
              <Route exact path="/SugarLicious/About" element={<AboutPage />} />
              <Route exact path="/SugarLicious/Terms&Conditions" element={<TermsAndConditionsPage />} />
              <Route exact path="/SugarLicious/Privacy&Policy" element={<PrivacyAndPolicyPage />} />
              <Route exact path="/SugarLicious/Products/:categoryID" element={<ProductsPage />} />
              <Route exact path="/SugarLicious/Products/:categoryID/:productID" element={<ProductDetailsPage />} />
              <Route exact path="/SugarLicious/Orders/:orders" element={<OrdersPage />} />
              <Route exact path="/SugarLicious/ReserveSeat" element={<ReserveSeatPage />} />
              <Route exact path="/SugarLicious/Contact" element={<ContactPage />} />
              <Route exact path="/SugarLicious/login" element={<Login />} />
              <Route exact path="/SugarLicious/Register" element={<Register />} />
              <Route exact path="/SugarLicious/login/forgotpassword" element={<ForgotPassword />} />
              <Route exact path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </UserData.Provider>
      </Notification.Provider>
    </Loading.Provider>
  );
};
export default App;
export {Loading, UserData, Notification};
