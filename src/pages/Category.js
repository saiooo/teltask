import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { checkIfNumber } from "./../helpers/Helper";

const Category = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.users);
  const categories = useSelector((state) => state.categories);

  const [currentCat, setCurrentCat] = useState(null);
  const [currentUsers, setCurrentUsers] = useState([]);

  const getCat = useCallback(() => {
    const category = categories.find((cat) => cat.id === checkIfNumber(id));
    return category;
  }, [id, categories]);

  const getUsers = useCallback(() => {
    let belongingUsers = [];
    if (currentCat.userIDs && currentCat.userIDs.length > 0) {
      belongingUsers = currentCat.userIDs.map((userId) =>
        users.find((user) => user.id === userId)
      );
    }

    return belongingUsers;
  }, [users, currentCat]);

  useEffect(() => {
    setCurrentCat(getCat());
    if (currentCat) {
      setCurrentUsers(getUsers());
    }
  }, [getCat, getUsers, currentCat]);

  return (
    <>
      <h1>Categories list</h1>
      {currentCat && <div>Category name: {currentCat.name}</div>}
      {currentUsers && currentUsers.length > 0 ? (
        <div>
          User List:
          {currentUsers.map((user) => {
            return <span key={`user-name-${user.id}`}> {user.name}, </span>;
          })}
        </div>
      ) : null}
    </>
  );
};

export default Category;
