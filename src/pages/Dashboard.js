import React from "react";
import { Link } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { FaOilCan } from "react-icons/fa";
import { GiSpookyHouse, GiSettingsKnobs } from "react-icons/gi";
import "../styles/dashboard.css";
import { FormattedMessage } from "react-intl";

const Dashboard = () => {
  return (
    <div className="dashboard flex-row ">
      <div className="grid-container">
        <Link to="/parish" className="btn-lg">
          <div className="grid-item">
            <FormattedMessage id="parish" /> <GiSpookyHouse className="ml-10" />
          </div>
        </Link>
        <Link to="/shepherd" className="btn-lg">
          <div className="grid-item">
            <FormattedMessage id="shepherd" /> <BsPeople className="ml-10" />
          </div>
        </Link>
        <Link to="/anointment" className="btn-lg">
          <div className="grid-item">
            <FormattedMessage id="anointment" /> <FaOilCan className="ml-10" />
          </div>
        </Link>
        <Link to="/anointment-request" className="btn-lg">
          <div className="grid-item">
            <FormattedMessage id="anointment_request" />{" "}
            <BsPeople className="ml-10" />
          </div>
        </Link>
        <Link to="/setting" className="btn-lg">
          <div className="grid-item">
            <FormattedMessage id="setting" />
            <GiSettingsKnobs className="ml-10" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
