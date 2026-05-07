import React from 'react'
import { useState } from "react";
import videos from "../data/video";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

const VideoPage = () => {
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
        <div className="min-h-screen transition-colors duration-300 mesh-gradient-light text-gray-900 overflow-x-hidden">

            <div className="fixed w-full top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors duration-300">
                <Header1 />
                <Header />
            </div>
            {/* HEADER */}
            <div className="pt-[160px] md:pt-[240px] pb-20 px-4 md:px-8">
                <h1 className="text-4xl md:text-7xl font-black text-center mb-8 md:mb-12 leading-tight">
                    Video <span className="text-blue-600">Library</span> 🎥
                </h1>

                {/* SEARCH */}
                <div className="flex justify-center mb-6 md:mb-10">
                    <input
                        type="text"
                        placeholder="Search videos..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-6 py-4 md:py-5 rounded-2xl w-full max-w-lg 
             bg-white text-gray-900 font-bold
             border border-gray-100 shadow-xl shadow-gray-200/50
             outline-none
             focus:ring-2 focus:ring-blue-500 transition-all text-sm md:text-base"
                    />
                </div>

                {/* FILTERS */}
                <div className="flex justify-center gap-6 md:gap-10 mb-12 md:mb-16 flex-wrap">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="w-5 h-5 md:w-6 md:h-6 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                            onChange={() => handleFilterChange("english")}
                        />
                        <span className="font-black text-gray-700 group-hover:text-blue-600 transition-colors text-sm md:text-lg">English</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="w-5 h-5 md:w-6 md:h-6 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                            onChange={() => handleFilterChange("hindi")}
                        />
                        <span className="font-black text-gray-700 group-hover:text-blue-600 transition-colors text-sm md:text-lg">Hindi</span>
                    </label>
                </div>

                {/* VIDEO GRID */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {filteredVideos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-white p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] border border-gray-50 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-gray-200/50 hover:shadow-2xl"
                        >
                            <div className="aspect-video mb-6 rounded-2xl overflow-hidden shadow-inner bg-gray-100">
                                <iframe
                                    className="w-full h-full"
                                    src={video.url}
                                    title={video.title}
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <p className="text-lg md:text-2xl font-black text-gray-900 mb-3 leading-tight">{video.title}</p>

                            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full">
                                {video.language}
                            </span>
                        </div>
                    ))}
                </div>

                {/* NO RESULT */}
                {filteredVideos.length === 0 && (
                    <div className="text-center mt-20 md:mt-32">
                        <span className="text-6xl mb-4 block">😢</span>
                        <p className="text-gray-400 text-lg md:text-2xl font-bold">
                            No videos found matching your search
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};
export default VideoPage;