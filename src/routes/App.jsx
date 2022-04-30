import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
