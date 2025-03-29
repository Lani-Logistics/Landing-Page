import { Routes, Route } from "react-router-dom";
import { Home, Notfound } from "./Pages";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Notfound />} /> 
    </Routes>
  );
};

export default App