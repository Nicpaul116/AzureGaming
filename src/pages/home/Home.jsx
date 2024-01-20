import React from "react";
import Homedetails from "./homedetails/Homedetails";
import Head from "./Head/Head";
import Top from "./TopGames/Top";
import Categories from "./Categories/Categories";
import End from "./End/End";
import { Navbar, Footer } from "../../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Head />
      <Homedetails />
      <Top />
      <Categories />
      <End />
      <Footer />
    </>
  );
};

export default Home;
