import { Route, Routes } from "react-router-dom";
import Card1 from "./components/Card1"
import Footer from "./components/Footer";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import ReferenceWebsite from "./pages/ReferenceWebsite";
import AboutUsPage from "./pages/AboutUsPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900  dark:text-white transition-colors duration-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/reference" element={<ReferenceWebsite />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
};

export default App;
