import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";
import Category from "./pages/Category";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/newUser" element={<NewUser />} />
          <Route index path="/category/:id" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
