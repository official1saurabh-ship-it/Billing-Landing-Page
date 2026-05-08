import React from 'react'
import Header from '../components/Header'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'

const ReferenceWebsite = () => {
    return (
        <div className="min-h-screen transition-colors duration-300 mesh-gradient-light text-gray-900 overflow-x-hidden">
            <div className="fixed w-full top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors duration-300">
                <Header1 />
                <Header />
            </div>
            <div className="pt-[160px] md:pt-[240px] px-4 md:px-8 text-center pb-20">
                <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">Reference <span className="text-pink-600">Websites</span></h1>
                <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-bold opacity-80 leading-relaxed">Explore some of the industry-leading platforms and ecosystems that inspire our bespoke digital architectures.</p>
            </div>
            <Footer />
        </div>
    )
}

export default ReferenceWebsite;