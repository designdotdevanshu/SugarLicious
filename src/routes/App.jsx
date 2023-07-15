import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "../components/Header/Header";
const App = () => {
  return (
    <React.Fragment>
      < Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};
export default App;
