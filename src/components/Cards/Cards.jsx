import React from "react";
import { TbUsers } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import access from "../../images/access.svg";
import coin from "../../images/coin.svg";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="card-row">
      <div className="cards">
        <div className="user-icon">
          <TbUsers />
        </div>
        <p>users</p>
        <h2>2,453</h2>
      </div>

      <div className="cards">
        <div className="user-icon1">
          <HiOutlineUserGroup />
        </div>
        <p> active users</p>
        <h2>2,453</h2>
      </div>

      <div className="cards">
        <div className="user-icon2">
          <img src={access} alt="icon" />
        </div>
        <p>users with loans</p>
        <h2>12,453</h2>
      </div>

      <div className="cards">
        <div className="user-icon3">
          <img src={coin} alt="icon" />
        </div>
        <p>users with savings</p>
        <h2>102,453</h2>
      </div>
    </div>
  );
};

export default Cards;
