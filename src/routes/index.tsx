import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import AboutMe from "../pages/aboutMe";
import MyProjects from "../pages/myProjects";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<h1>404 - Not Found</h1>} /> */}
        <Route path="/sobre-mim" element={<AboutMe />} />
        <Route path="/projetos" element={<MyProjects />} />
      </Routes>
    </BrowserRouter>
  );
}