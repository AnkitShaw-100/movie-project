import React from "react";
import Home from "./components/Home";
import Singlemovie from "./components/Singlemovie";
import Errorpage from "./components/Errorpage";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Singlemovie />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
