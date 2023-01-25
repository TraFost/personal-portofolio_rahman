import LandingPage from "./pages/LandingPage";
import PortofolioPage from "./pages/PortofolioPage";
import ContactPage from "./pages/ContactPage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // const [data, setData] = useState({});

  // const getData = async () => {
  //   const res = await axios.get("http://localhost:3001/data");
  //   setData(res.data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/portofolio" element={<PortofolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portofolio/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
