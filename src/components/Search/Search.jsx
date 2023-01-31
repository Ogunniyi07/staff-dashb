import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <input type="search" placeholder="Search for anything" />
      <div className="icon">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default Search;
