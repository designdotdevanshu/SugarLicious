import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "../components/Header/Header";
const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route exact path="/" element={<HomePage />} /> */}
        </Routes>
      </Router>
    </>
  );
};
export default App;
