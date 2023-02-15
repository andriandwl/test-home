import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PortofolioPage from "./pages/PortofolioPage";
import DetailPage from "./pages/DetailPage";
import PortofolioOne from "./components/PortofolioOne";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portofolio" element={<PortofolioPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/banks/:id" element={<DetailPage />} />
          <Route path="/portofolioone" element={<PortofolioOne />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}
