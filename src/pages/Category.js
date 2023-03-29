import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Categories list</h1>
      <div>Bus matyt ateity</div>
      <div>Category id: {id}</div>
    </>
  );
};

export default Category;
