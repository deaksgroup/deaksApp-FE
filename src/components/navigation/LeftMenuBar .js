import React from "react";
import { NavLink } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { RiHotelFill } from "react-icons/ri";

import "./style/LeftMenuBar.css";
const logo = require("../../assets/logo.jpg");

export const LeftMenuBar = (props) => {
  return (
    <div className="applicationWrapper">
      <div className="menubarParent">
        <div className="menubarWrapper">
          <img className="appLogo" src={logo} alt="app logp" />
          <div className="appMenuList">
            <ul>
              <li>
                <NavLink to="/users" activeclassname="selected">
                  <PeopleAltIcon /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/hotels" activeclassname="selected">
                  <RiHotelFill className="iconLeftBar" /> Hotels
                </NavLink>
              </li>
              <li>
                <NavLink to="/attendance" activeclassname="selected">
                  <AssignmentIndIcon /> Attendance
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contentWrapper">{props.children}</div>
    </div>
  );
};
