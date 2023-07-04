import React from "react";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile/Profile";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Profile/>
        <Work />
        <Contact />
      </main>
    </>
  );
};

export default Home;
