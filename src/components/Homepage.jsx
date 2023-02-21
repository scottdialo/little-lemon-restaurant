import React from "react";
import { About } from "./About";
import Main from "./Main";
import Testimonials from "./Testimonials";
import WeekSpecial from "./WeekSpecial";

function Homepage() {
  return (
    <div>
      <Main />
      <WeekSpecial />
      <Testimonials />
      <About />
    </div>
  );
}

export default Homepage;
