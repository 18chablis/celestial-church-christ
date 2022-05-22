import React from "react";
import { Link } from "react-router-dom";

import "../styles/welcome.css";

const Welcome = () => {
  return (
    <div className="welcome flex-column ">
      <div className="loader pb-20">
        <span>-</span>Welcome to CCC HQ Web App<span>-</span>
      </div>
      <div className="pt-20 ">
        <Link to="/login" className="btn">
          Login to continue
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
