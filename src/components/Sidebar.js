import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./../assets/css/Utils.css";
import { unflatCatList } from "./../helpers/Helper";

const Sidebar = () => {
  const categories = useSelector((state) => state.categories);
  const [arrCats, setArrCats] = useState([]);

  useEffect(() => {
    setArrCats(unflatCatList(categories));
  }, [categories]);

  const printCatList = (cat) => {
    return (
      <div key={cat.id}>
        <Link to={`category/${cat.id}`}>{cat.name}</Link>
        {cat.subcategories && cat.subcategories.length > 0 && (
          <div className="pl-10">
            {cat.subcategories.map((child) => printCatList(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <strong>Forms:</strong>
      <div>
        <Link to="/newUser">New User</Link>
      </div>
      <div>
        <Link to="/newCategory">New Category</Link>
      </div>

      <strong>Categories:</strong>
      <div>
        <div>{arrCats.map((cat) => printCatList(cat))}</div>
      </div>
    </>
  );
};

export default Sidebar;
