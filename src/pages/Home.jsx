import React from "react";
import Announcement from "../components/Annoucement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newletter from "../components/Newletter/Newletter";
import Slider from "../components/Slider/Slider";
import Categories from './../components/Categories/Categories';
import Products from './../components/Products/Products'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newletter/>
      <Footer/>
    </div>
  );
};

export default Home;
