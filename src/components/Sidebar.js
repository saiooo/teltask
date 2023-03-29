import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div>
        <Link to="/user">New User</Link>
      </div>
      <div>
        <Link to="/vvv">New Category</Link>
      </div>
    </>
  );
};

export default Sidebar;
