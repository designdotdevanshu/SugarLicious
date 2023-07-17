import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "../components/Header/Header";
import ReserveSeat from "../components/ReserveSeat/ReserveSeat";
import Contact from "../components/Contact/Contact";
const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/ReserveSeat" element={<ReserveSeat />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
