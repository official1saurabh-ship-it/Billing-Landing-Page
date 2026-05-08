import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

import AboutUsPage from "./pages/AboutUsPage";
import FeaturesPage from "./pages/FeaturesPage";
import Pricing from "./pages/Pricing";
import ContactPage from "./pages/ContactPage";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen mesh-gradient-light text-gray-900">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/video" element={<VideoPage />} />

        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
