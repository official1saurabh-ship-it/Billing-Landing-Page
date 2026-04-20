import React from 'react'
import { useState } from "react";
import videos from "../data/video";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

import { useSelector } from "react-redux";

const VideoPage = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState({
        english: false,
        hindi: false,
    });
    const handleFilterChange = (lang) => {
        setFilters((prev) => ({
            ...prev,
            [lang]: !prev[lang],
        }));
    };

    const filteredVideos = videos.filter((video) => {
        const matchLanguage =
            (!filters.english && !filters.hindi) ||
            (filters.english && video.language === "english") ||
            (filters.hindi && video.language === "hindi");


        const matchSearch = video.title
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchLanguage && matchSearch;
    });
    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'mesh-gradient-dark text-white' : 'mesh-gradient-light text-gray-900'} `}>

            <div className="fixed w-full top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
                <Header1 />
                <Header />
            </div>
            {/* 🔥 HEADER */}
            <div className="pt-48">
                <h1 className="text-3xl font-bold  text-center">
                    Video Library 🎥
                </h1>

                {/* 🔍 SEARCH */}
                <div className="flex justify-center mb-6 mt-3">
                    <input
                        type="text"
                        placeholder="Search videos..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 rounded-md w-[300px] 
             bg-white dark:bg-gray-700 text-black dark:text-white 
             border border-gray-400 dark:border-gray-600 
             outline-none 
             focus:ring-2 focus:ring-blue-500 
             focus:border-blue-500 transition-colors"
                    />
                </div>

                {/* 🎯 FILTERS */}
                <div className="flex justify-center gap-6 mb-8">

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            onChange={() => handleFilterChange("english")}
                        />
                        English
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            onChange={() => handleFilterChange("hindi")}
                        />
                        Hindi
                    </label>

                </div>

                {/* 🎥 VIDEO GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6">

                    {filteredVideos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-white dark:bg-gray-800 p-3 rounded-lg hover:scale-105 transition shadow-md dark:shadow-none"
                        >

                            <iframe
                                className="w-full h-40 rounded-md"
                                src={video.url}
                                title={video.title}
                                allowFullScreen
                            ></iframe>

                            <p className="mt-2 font-semibold text-gray-900 dark:text-white">{video.title}</p>

                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {video.language}
                            </span>

                        </div>
                    ))}

                </div>

                {/* ❌ NO RESULT */}
                {filteredVideos.length === 0 && (
                    <p className="text-center mt-10 text-gray-400">
                        No videos found 😢
                    </p>
                )}
            </div>
            <Footer />
        </div>
    );
};
export default VideoPage