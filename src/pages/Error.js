import React from "react";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";

const Error = () => {
  return (
    <main className="error-page">
      <div className="error-container">
        <p>
          <FaTools /> Oops! This page doesn't exist'
        </p>
        <Link to="/" className="error-btn">
          Back Home
        </Link>
      </div>
    </main>
  );
};

export default Error;
