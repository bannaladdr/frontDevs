import React from "react";
import Navbar from "../components/sections/Navbar";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Resume from "../components/sections/Resume";
import Portfolio from "../components/sections/Portfolio";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";

const MainLayout = () => {
  return (
    <div className="max-w-7xl px-10 mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default MainLayout;
