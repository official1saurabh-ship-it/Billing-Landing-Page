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
import mongodb from "../assets/mongodb.jpeg"
import mssql from "../assets/mssql.jpeg"
import node from "../assets/node.jpeg"
import react from "../assets/react.jpeg"
import reactnative from "../assets/reactnative.svg";
import ios from "../assets/apple.png"
import android from "../assets/android.png"
import php from "../assets/php.png"
import { useState } from 'react'
import { aboutus } from "../data/aboutus";


const AboutUsPage = () => {
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
        <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
            <div className='fixed w-full top-0 z-50'>
                <Header1 />
                <Header />
            </div>

            <div className='flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-24 pt-[160px] md:pt-[200px] pb-20 gap-12 lg:gap-24 items-center'>
                <div className='flex flex-col gap-6 lg:w-1/2'>
                    <div className='text-sm md:text-xl bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-black tracking-widest uppercase'>WHERE STRATEGY MEETS TECHNOLOGY</div>
                    <div className="text-4xl md:text-6xl font-black">Our <span className='bg-orange-500 bg-clip-text text-transparent'>Mission</span> </div>
                    <div className='text-base md:text-lg font-medium leading-relaxed opacity-90 text-gray-700'>To engineer resilient digital backbones that empower enterprises to navigate and lead in a fragmenting technological landscape.<br /><br />

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
                    <div className='grid grid-cols-2 gap-4 md:gap-8'>
                        {[
                            { color: "blue", label: "Elite Engineering", icon: <path d="m18 16 4-4-4-4"></path> },
                            { color: "orange", label: "Cloud Solution", icon: <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path> },
                            { color: "green", label: "Secure Architecture", icon: <path d="m9 12 2 2 4-4"></path> },
                            { color: "purple", label: "24/7 Support", icon: <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path> }
                        ].map((item, i) => (
                            <div key={i} style={{ transform: "translateZ(30px)" }} className={`group flex flex-col items-center p-6 md:p-8 bg-white rounded-3xl shadow-xl border border-gray-50 hover:border-${item.color}-500/30 transition-all duration-300`}>
                                <div className={`w-12 h-12 md:w-16 md:h-16 bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`text-${item.color}-600 md:w-8 md:h-8`}>
                                        {i === 0 && <><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></>}
                                        {i === 1 && <><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></>}
                                        {i === 2 && <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></>}
                                        {i === 3 && <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>}
                                    </svg>
                                </div>
                                <span className="font-black text-center text-gray-900 text-sm md:text-base leading-tight">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-full bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-black text-3xl md:text-6xl leading-tight text-center mt-10 mb-2 px-4'>From Vision to Reality</div>
            <div className='w-full text-amber-800 font-black text-2xl md:text-4xl leading-relaxed text-center mb-10'>Our Story</div>

            <div className='px-4 sm:px-8 md:px-12 lg:px-24 py-10 md:py-20'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch justify-center">
                    {whyBillingMitra.map((item, index) => (
                        <Card1 key={index} index={index} heading={item.heading} description={item.description} image={item.image} />
                    ))}
                </div>
            </div>

            <div className='py-20 px-4 md:px-8 bg-gray-50'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-center text-lg md:text-2xl font-bold text-blue-600 mb-2'>Our Technology Stack</div>
                    <div className='text-center text-3xl md:text-5xl font-black mb-12 text-gray-900 leading-tight'>Built for Innovation & <span className='text-blue-600'>Performance</span> </div>
                    <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center">
                        {cardAbout.map((item, index) => (
                            <CardAbout key={index} index={index} comment={item.comment} name={item.name} />
                        ))}
                    </div>
                </div>
            </div>

            <section className="py-20 md:py-32 px-4 overflow-x-hidden bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-sm block mb-4">Core Principles</span>
                    <h2 className="text-3xl md:text-6xl font-black mb-16 text-gray-900">Values Driving <span className="text-blue-500">Innovation & Growth</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                        {[
                            { title: "Engineering Excellence", desc: "We architect high-performance ecosystems that create tangible enterprise value.", icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> },
                            { title: "Strategic Innovation", desc: "Integrating cutting-edge technologies to future-proof your digital investments.", icon: <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"></path> },
                            { title: "Unwavering Integrity", desc: "Transparency and reliability are our foundation for absolute trust.", icon: <path d="m9 12 2 2 4-4"></path> }
                        ].map((value, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-gray-50 border border-white hover:border-blue-500/10 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-blue-600 rounded-3xl mb-8 flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        {i === 0 && <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>}
                                        {i === 1 && <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71Z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"></path><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path></>}
                                        {i === 2 && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></>}
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-gray-900">{value.title}</h3>
                                <p className="opacity-80 leading-relaxed text-gray-700 font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-sm block mb-4">Why Choose Biosoftech</span>
                        <h2 className="text-3xl md:text-6xl font-black mb-8 text-gray-900 leading-tight">Your Partner in <span className="text-blue-500">Reliable IT Solutions</span></h2>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl font-medium opacity-80 leading-relaxed text-gray-700">
                            We blend industry expertise, cutting-edge technology, and strategic engineering to build impactful digital architectures that drive sustainable growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aboutus.map((item, index) => (
                            <Card1 key={index} index={index} image={item.image} heading={item.heading} description={item.description} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUsPage;