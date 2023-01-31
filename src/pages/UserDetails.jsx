import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import leftarrow from "../images/leftarrow.svg";
import Sidebar from "../components/Sidebar/Sidebar";

import "../styles/Dashboard.scss";
import "../styles/UserDetails.scss";
import Profile from "../components/Profile/Profile";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [data, setData] = useState(null);
  let { pid } = useParams();
  var url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${pid}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch(() => {
        console.log("There was an error with retrieving data");
      });
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <Nav />
      </div>
      <div className="home">
        <div className="d_sidebar">
          <div className="bar">
            <Sidebar />
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="arrow">
              <a href="/Dashboard">
                <img src={leftarrow} alt="leftarrow" />
                <span>Back to Users</span>
              </a>
            </div>
            <div className="user">
              <h2>User Details</h2>
              <div className="arrow-btn">
                <button>BlackList User</button>
                <button>Activate User</button>
              </div>
            </div>
            <div className="d-contact">
              <div className="user-profile">
                {data != null && <Profile data={data} />}
              </div>
              <div className="user-profile">
                {data != null && <PersonalInfo data={data} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
