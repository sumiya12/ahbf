import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Age from "./components/Age";
import Name from "./components/Name";
import Major from "./components/Major";

import Description from "./components/Description";
import Profile from "./components/Profile";
export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/Profile" />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Age" element={<Age />} />
        <Route path="/Name" element={<Name />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/Major" element={<Major />} />
      </Routes>
    </div>
  );
}
