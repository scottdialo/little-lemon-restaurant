import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "./styles.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import WeekSpecial from "./components/WeekSpecial";
import Header from "./components/Header";
import { About } from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
