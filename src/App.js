import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import User from "./pages/User";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
