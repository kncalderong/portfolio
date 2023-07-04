import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false); //to handle the toggle button

  //here i need to modify the size of the container, based on the size of the ul list that contains all links
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // function to open the toggle, with corresponding height:
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px"; //hidden links by default
    }
  }, [showLinks]);

  return (
    <nav id="navbar" class="nav">
      {/* firts the nav logo and toggle*/}
      <div className="nav-center">
        <div className="nav-header">
          <button
            className={`${showLinks ? 'nav-toggle-rotate nav-toggle' : 'nav-toggle'}`}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars size={32} />
          </button>
        </div>

        {/* second the content (links..), of the nav*/}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <a
                href="#welcome-section"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work-section"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
