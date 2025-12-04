import { Routes, Route } from "react-router-dom";
import LayoutCommon from "../layout/Layout_Common";
import Home from "../pages/common/Home_Common";
import About from "../pages/common/About_Common";
import Contact from "../pages/common/ContactUs_Common";

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutCommon />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        {/* <Route path="explore" element={<div>Explore Page</div>} /> */}
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
};

export default CommonRoutes;