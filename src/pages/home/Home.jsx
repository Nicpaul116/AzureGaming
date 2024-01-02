import React from "react";
import "./home.css";
import Homedetails from "./homedetails/Homedetails";
import Head from "./Head/Head";
import Top from "./TopGames/Top";
import Categories from "./Categories/Categories";
import End from "./End/End";

const Home = () => {
  return (
    <>
      <Head />
      <Homedetails />
      <Top />
      <Categories />
      <End />
    </>
  );
};

export default Home;
