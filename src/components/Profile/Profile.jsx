import React from "react";
import { MdStar, MdStarBorder } from "react-icons/md";
import "./Profile.scss";

const Profile = ({ data }) => {
  var profile = data.profile;
  return (
    <div className="userprofile">
      <div className="profile">
        <div className="general">
          <div className="image">
            <img src={profile.avatar} alt="userProfile" />
          </div>
          <div className="name">
            <h3>
              {profile.firstName} {profile.lastName}
            </h3>
            <span>{data.accountNumber}</span>
          </div>
        </div>
        <div className="rate">
          <span>User's Tier</span>
          <span className="star">
            <MdStar style={{ fontSize: "22px" }} />
            <MdStarBorder style={{ fontSize: "22px" }} />
            <MdStarBorder style={{ fontSize: "22px" }} />
          </span>
        </div>
        <div className="price">
          <h3>₦200,000.00</h3>
          <span>{profile.bvn}/Providus Bank</span>
        </div>
      </div>
      <ul>
        <li>General Details</li>
        <li>Document</li>
        <li>Bank Details</li>
        <li>Loans</li>
        <li>Savings</li>
        <li>App and Systems</li>
      </ul>
    </div>
  );
};
export default Profile;
