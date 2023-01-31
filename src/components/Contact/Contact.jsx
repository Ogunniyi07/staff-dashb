import React, { useState } from "react";
import drop from "../../images/drop.svg";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "./Contact.scss";
import ContactForm from "../ContactForm/ContactForm";
import { AiOutlineEye, AiOutlineUserAdd } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";

const Contact = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="contact">
        <table>
          <tbody>
          <tr>
            <th className="col1">
              ORGANIZATION
              <img src={drop} alt="dropdown" onClick={handleOpen} />
            </th>

            <th className="col2">
              USERNAME
              <img src={drop} alt="dropdown" />
            </th>

            <th className="col3">
              EMAIL
              <img src={drop} alt="dropdown" />
            </th>

            <th className="col4">
              PHONE NUMBER
              <img src={drop} alt="dropdown" />
            </th>

            <th className="col5">
              DATE JOINED
              <img src={drop} alt="dropdown" />
            </th>

            <th className="col6">
              STATUS
              <img src={drop} alt="dropdown" />
            </th>

            <th className="col7"></th>
          </tr>

          {data?.map((data, index) => (
            <tr key={index}>
              <td>{data.orgName}</td>
              <td>{data.userName}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.lastActiveDate}</td>
              <td>
                {" "}
                <span className="active">Active</span>{" "}
              </td>
              <td>
                <HiOutlineDotsVertical
                  onClick={handleClick}
                  style={{ fontSize: "12px", cursor: "pointer" }}
                />
                <ul className="dropdown-content">
                  <a
                    href={`UserDetails/${data.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <li>
                      <AiOutlineEye
                        style={{ fontSize: "16px", color: "#545F7D" }}
                      />
                      <span>View Details</span>
                    </li>
                  </a>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li href="#">
                      <AiOutlineUserAdd
                        style={{ fontSize: "16px", color: "#545F7D" }}
                      />
                      <span>Blacklist User</span>
                    </li>
                  </a>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <li href="#">
                      <FiUserCheck
                        style={{ fontSize: "16px", color: "#545F7D" }}
                      />
                      <span>Activate User</span>
                    </li>
                  </a>
                </ul>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        {open ? <ContactForm /> : ""}
      </div>
    </>
  );
};

export default Contact;
