import React from "react";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="welcome-section" className="welcome-section">
          <h1>Hi, I'm Kevin Nicolas Calderon</h1>
          <p>
            A front-end developer (ReactJs) who enjoy the process of learning
            and improving as a way to live
          </p>
        </section>
        <Work />
        <Contact />
      </main>
    </>
  );
};

export default Home;
