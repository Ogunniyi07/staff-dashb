import React from "react";
import Search from "../Search/Search";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiOutlineBell } from "react-icons/hi";
import logo from "../../images/logo.png";
import user from "../../images/user.png";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="userProfile">
          <a href="#">Docs</a>
          <div className="bell">
            <HiOutlineBell />
          </div>
          <img src={user} alt="user" />
          <p>Adedeji</p>
          <RiArrowDownSFill />
        </div>
      </div>
    </div>
  );
};

export default Nav;
