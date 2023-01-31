import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <label>Organization</label>
      <div className="select">
        <select>
          <option value="select">Select</option>
        </select>
        <MdKeyboardArrowDown
          style={{
            fontSize: "20px",
            color: "#DEE3EB",
            marginLeft: "-30px",
            marginBottom: "-7px",
          }}
        />
      </div>
      <label>Username</label>
      <input type="text" placeholder="User" />
      <label>Email</label>
      <input type="Email" placeholder="Email" />
      <label>Date</label>
      <div className="select">
        <input type="text" placeholder="Date" />
        <FaCalendarAlt
          style={{
            fontSize: "18px",
            color: "#DEE3EB",
            marginLeft: "-30px",
            marginBottom: "-7px",
          }}
        />
      </div>
      <label>Phone Number</label>
      <input type="number" placeholder="Phone Number" />
      <label>Status</label>
      <div className="select">
        <select>
          <option value="select">Select</option>
        </select>
        <MdKeyboardArrowDown
          style={{
            fontSize: "18px",
            color: "#DEE3EB",
            marginLeft: "-30px",
            marginBottom: "-7px",
          }}
        />
      </div>

      <div className="formButton">
        <button>Reset</button>
        <button>Filter</button>
      </div>
    </div>
  );
};

export default ContactForm;
