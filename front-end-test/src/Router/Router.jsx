import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "../Pages/SignupPage/SignupPage";
import MainPage from "../Pages/MainPage/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
