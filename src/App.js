import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import NewCategory from "./pages/NewCategory";
import Category from "./pages/Category";
import Page404 from "./pages/Page404";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/*" element={<Page404 />} />
          <Route index path="/newUser" element={<NewUser />} />
          <Route index path="/newCategory" element={<NewCategory />} />
          <Route index path="/category/:id" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
