import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
