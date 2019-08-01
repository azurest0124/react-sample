import React from "react";
import HMF from "../components/layout/composite/HMF";
import Footer from "../components/layout/unit/Footer";
import Header from "../components/layout/unit/Header";
const Home = () => {
  return (
    <HMF
      headerComponent={<Header />}
      footerComponent={<Footer />}
      mainComponent={<h3 className="white">HOME</h3>}
    />
  );
};

export default Home;
