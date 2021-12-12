import React from "react";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="welcome-section" class="welcome-section">
          <h1>Hi, I'm Kevin Nicolas Calderon</h1>
          <p>a developer</p>
        </section>
        <Work />
        <Contact />
      </main>
    </>
  );
};

export default Home;
