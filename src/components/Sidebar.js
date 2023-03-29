import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./../assets/css/Utils.css";

const Sidebar = () => {
  const categories = useSelector((state) => state.categories);
  const [arrCats, setArrCats] = useState([]);

  const arrangeCatList = useCallback(() => {
    const map = new Map();
    categories.forEach((category) => {
      map.set(category.id, { ...category, subcategories: [] });
    });

    categories.forEach((category) => {
      if (category.parentCategoryId !== null) {
        const parent = map.get(category.parentCategoryId);
        parent.subcategories.push(map.get(category.id));
      }
    });

    const result = [];
    map.forEach((value) => {
      if (value.parentCategoryId === null) {
        result.push(value);
      }
    });
    return result;
  }, [categories]);

  useEffect(() => {
    setArrCats(arrangeCatList());
  }, [arrangeCatList]);

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
