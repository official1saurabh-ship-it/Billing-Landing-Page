import React from 'react'
import Header from '../components/Header'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import Card1 from '../components/Card1'
import CardAbout from '../components/CardAbout'
import net from '../assets/.net.jpeg'
import java from '../assets/java.jpeg'
import laravel from "../assets/laravel.jpeg"
import tailwind from "../assets/tailwind.jpeg"
import spring from "../assets/spring.jpeg"
import hibernate from "../assets/Hibernate.png"
import mysql from "../assets/mysql.jpeg"
import mongodb from "../assets/mongodb.jpeg"
import mssql from "../assets/mssql.jpeg"
import node from "../assets/node.jpeg"
import react from "../assets/react.jpeg"
import reactnative from "../assets/reactnative.svg";
import ios from "../assets/apple.png"
import android from "../assets/android.png"
import php from "../assets/php.png"
import biosoftech from "../assets/biosoftech.png"
import { useState } from 'react'
import aboutus from "../data/aboutus";


import { useSelector } from 'react-redux'

const AboutUsPage = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    const whyBillingMitra = [
        {
            heading: "Architecting Possibility",
            description: "Biosoftech was founded on a single vision to translate complex business challenges into resilient high-performance digital ecosystem through static engineering"
        },
        {
            heading: "Easy to Use Interface",
            description: "We evolved beyond traditional development into a global strategic partner, delivering the cloud-native architectures and enterprise engines that define modern digital maturity."
        },
        {
            heading: "Standard of Resilience",
            description: "Today, we empower industry leaders with secure, future-ready systems designed for absolute reliability, zero-friction scaling, and sustained technological leadership."
        },

    ];

    const cardAbout = [
        {
            comment: node,
            name: "nodejs"
        },
        {
            comment: react,
            name: "Reactjs"
        },
        {
            comment: ios,
            name: "ios"
        },
        {
            comment: android,
            name: "Android"
        },
        {
            comment: reactnative,
            name: "React-Native"
        },
        {
            comment: tailwind,
            name: "Tailwind CSS"
        },
        {
            comment: mongodb,
            name: "MongoDB MySql"
        },
        {
            comment: mssql,
            name: "MySql Server"
        },
        {
            comment: php,
            name: "PHP"
        },
        {
            comment: laravel,
            name: "Laravel"
        },
        {
            comment: net,
            name: ".Net"
        },
        {
            comment: java,
            name: "JAVA"
        },
        {
            comment: spring,
            name: "SpringBoot"
        },
        {
            comment: hibernate,
            name: "Hibernate"
        },
    ]

    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - card.left;
        const y = e.clientY - card.top;
        const centerX = card.width / 2;
        const centerY = card.height / 2;

        // Calculate rotation (max 15 degrees)
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };



    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'mesh-gradient-dark text-white' : 'mesh-gradient-light text-gray-900'}`}>
            <div className='fixed w-full top-0 z-50'>
                <Header1 />
                <Header />
            </div>

            <div className='flex flex-col lg:flex-row px-8 md:px-20 lg:px-60 pt-[140px] pb-20 gap-16 items-center'>
                <div className='flex flex-col gap-6 lg:w-1/2'>
                    <div className='text-xl md:text-2xl bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-bold'>WHERE STRATEGY MEETS TECHNOLOGY</div>
                    <div className="text-3xl md:text-5xl font-bold">Our <span className='bg-orange-500 bg-clip-text text-transparent'>Mission</span> </div>
                    <div className='text-lg font-medium leading-relaxed opacity-90'>To engineer resilient digital backbones that empower enterprises to navigate and lead in a fragmenting technological landscape.<br /><br />

                        Our mission is to establish BioSoftech as a premier global technology partner—recognized for strategic engineering, absolute reliability, and a relentless commitment to digital maturity.<br /><br />


                        We empower businesses with scalable, high-performance architectures that transform complex operational challenges into streamlined competitive advantages. We embrace new challenges and continuously innovate to ensure our clients remain future-ready.
                    </div>
                </div>

                <div className='lg:w-1/2 w-full'
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                        transition: rotate.x === 0 ? "all 0.5s ease" : "none",
                        transformStyle: "preserve-3d"
                    }}
                >
                    <div className='grid grid-cols-2 gap-6 md:gap-8'>
                        <div style={{ transform: "translateZ(30px)" }} className="group flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-[2rem] shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                            </div>
                            <span className="font-bold text-center text-gray-900 dark:text-white">Elite Engineering</span>
                        </div>

                        <div style={{ transform: "translateZ(30px)" }} className="group flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-[2rem] shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700 hover:border-orange-500/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/40 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600 dark:text-orange-400"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>
                            </div>
                            <span className="font-bold text-center text-gray-900 dark:text-white">Cloud Solution</span>
                        </div>

                        <div style={{ transform: "translateZ(30px)" }} className="group flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-[2rem] shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700 hover:border-green-500/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/40 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                            </div>
                            <span className="font-bold text-center text-gray-900 dark:text-white">Secure Architecture</span>
                        </div>

                        <div style={{ transform: "translateZ(30px)" }} className="group flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-[2rem] shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700 hover:border-purple-500/30 transition-all duration-300">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/40 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
                            </div>
                            <span className="font-bold text-center text-gray-900 dark:text-white">24/7 Support</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-bold text-5xl md:text-6xl leading-tight text-center mt-10 mb-2'>From Vision to Reality</div>
            <div className='w-full text-amber-800 dark:text-amber-500 font-bold text-3xl md:text-4xl leading-relaxed text-center'>Our Story</div>
            <div className='px-8 md:px-20 lg:px-60 py-20'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full items-center justify-center">
                    {whyBillingMitra.map((item, index) => (
                        <Card1 key={index} index={index} heading={item.heading} description={item.description} image={item.image} />
                    ))}
                </div>
            </div>

            <div className='p-20'>
                <div className='w-full px-56'>
                    <div className='text-center text-2xl font-bold'>Our Technology Stack</div>
                    <div className='text-center text-4xl font-bold mb-5'>Built for Innovation & <span className='bg-blue-600 bg-clip-text text-transparent'>Performance</span> </div>
                    <div className='p-20'>
                        <div className="flex flex-wrap gap-6 items-center justify-center">
                            {cardAbout.map((item, index) => (
                                <CardAbout key={index} index={index} comment={item.comment} name={item.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-20 px-6 overflow-x-hidden transition-colors duration-300">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-blue-500 dark:text-blue-400 font-black uppercase tracking-[0.2em] text-sm block mb-4">Core Principles</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-gray-900 dark:text-white">Values Driving <span className="text-blue-500 dark:text-blue-400">Innovation & Growth</span></h2>                    <div className="grid md:grid-cols-3 gap-8 items-stretch">
                        <div className="group p-8 rounded-[2rem] bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-blue-500/20 shadow-sm transition-all duration-500 hover:shadow-2xl flex flex-col items-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-blue-500 rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3 className="text-2xl font-black mb-4">Engineering Excellence</h3>
                            <p className="opacity-80 leading-relaxed">We architect high-performance ecosystems that create tangible enterprise value.</p>
                        </div>

                        <div className="group p-8 rounded-[2rem] bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-blue-500/20 shadow-sm transition-all duration-500 hover:shadow-2xl flex flex-col items-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-blue-500 rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71Z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"></path><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path></svg>
                            </div>
                            <h3 className="text-2xl font-black mb-4">Strategic Innovation</h3>
                            <p className="opacity-80 leading-relaxed">Integrating cutting-edge technologies to future-proof your digital investments.</p>
                        </div>

                        <div className="group p-8 rounded-[2rem] bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-blue-500/20 shadow-sm transition-all duration-500 hover:shadow-2xl flex flex-col items-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-blue-500 rounded-2xl mb-8 flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                            </div>
                            <h3 className="text-2xl font-black mb-4">Unwavering Integrity</h3>
                            <p className="opacity-80 leading-relaxed">Transparency and reliability are our foundation for absolute trust.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div>
                    <div>
                        <div>Why Choose Biosoftech</div>
                        <div>Your Partner in Reliable IT Solutions</div>
                        <div>We blend industry expertise, cutting-edge technology, and strategic engineering to build impactful digital architectures that drive sustainable growth.</div>
                        {aboutus.map((item, index) => (
                            <Card1 />
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUsPage;