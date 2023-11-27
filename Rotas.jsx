import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filtro from "../components/Filtro/Filtro";
import Home from "../components/Home/Home";

function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filtro" element={<Filtro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rotas;
