import React from 'react'
import Header from '../components/Header'
import Header1 from '../components/Header1'


import { useSelector } from 'react-redux'

const ReferenceWebsite = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'mesh-gradient-dark text-white' : 'mesh-gradient-light text-gray-900'}`}>
            <div className="fixed w-full top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
                <Header1 />
                <Header />
            </div>
            <div className="pt-48 text-center text-4xl font-bold">
                Reference Websites
            </div>
        </div>
    )
}

export default ReferenceWebsite