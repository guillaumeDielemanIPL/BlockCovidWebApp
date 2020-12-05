import React from "react";
import HeaderUnlogged from "components/Headers/HeaderUnlogged.jsx";
import HomeContent from "components/Home/HomeContent";
import Footer from "components/SharedComponents/Footer";
const HomeView = () => {
  return (
    <div>
      <HeaderUnlogged />
      <HomeContent />
      <Footer />
    </div>
  );
};
export default HomeView;
