import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import App_Product from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Contato from "./Contato";
import Produto from "./Produto";

const Index_Product = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<App_Product />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Index_Product;
