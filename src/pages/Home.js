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
            I'm a front-end developer (ReactJs), who takes special care of the
            details, functionality, and good practices in coding. I'm always
            improving my programming skills and I'm pleased to invite you to
            take a look at my job
          </p>
        </section>
        <Work />
        <Contact />
      </main>
    </>
  );
};

export default Home;
