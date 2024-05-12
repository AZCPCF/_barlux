import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Home = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Home;
