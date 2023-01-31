import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import Cards from "../components/Cards/Cards";
import Sidebar from "../components/Sidebar/Sidebar";

import "../styles/Dashboard.scss";
import Contact from "../components/Contact/Contact";
import Pagination from "../components/Pagination/usePagination";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch(() => {
        console.log("There was an error with retrieving data");
      });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <h2>Users</h2>
            <div className="d-contact">
              <Cards />
              <Contact data={currentItems} />
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
