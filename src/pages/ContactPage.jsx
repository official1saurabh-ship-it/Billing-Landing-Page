import React, { useState } from 'react';
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";
import {
    RiMapPinLine,
    RiPhoneLine,
    RiMailLine,
    RiTimeLine,
    RiFacebookBoxLine,
    RiInstagramLine,
    RiLinkedinLine,
    RiTwitterFill,
    RiSendPlaneFill
} from "@remixicon/react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for reaching out! We will get back to you soon.");
    };

    const contactDetails = [
        {
            icon: <RiMapPinLine className="text-primary" size={28} />,
            title: "Our Location",
            content: "Office No. 624F/20A, On Third Floor,Kanchanpur Matiyari, Kotwali Road,Near Matiyari Chauraha,Chinhat, Lucknow, U.P. – 226028",
            link: "https://goo.gl/maps/placeholder"
        },
        {
            icon: <RiPhoneLine className="text-primary" size={28} />,
            title: "Phone Number",
            content: "+91 6209688930",
            link: "tel:+916209688930"
        },
        {
            icon: <RiMailLine className="text-primary" size={28} />,
            title: "Email Address",
            content: "Info@Biosoftech.com",
            link: "mailto:Info@Biosoftech.com"
        },
        {
            icon: <RiTimeLine className="text-primary" size={28} />,
            title: "Working Hours",
            content: "Mon - Sat: 09:00 AM - 07:00 PM",
            link: null
        }
    ];

    return (
        <div className="flex flex-col min-h-screen transition-colors duration-300 mesh-gradient-light text-gray-900 overflow-x-hidden">

            {/* FIXED HEADER */}
            <div className="fixed w-full top-0 left-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors duration-300">
                <Header1 />
                <Header />
            </div>

            <main className="flex-grow pt-[160px] md:pt-[240px] pb-20 md:pb-32 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Heading Section */}
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-xs md:text-sm block mb-4">Connect With Us</span>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">Let's Start a <span className="text-primary">Conversation</span></h1>
                        <p className="text-lg md:text-2xl opacity-80 max-w-3xl mx-auto leading-relaxed text-gray-600 font-medium">
                            Have a question about our enterprise solutions? Our team of experts is ready to help you navigate your digital transformation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

                        {/* Left Column: Contact Info */}
                        <div className="space-y-8 md:space-y-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                {contactDetails.map((detail, index) => (
                                    <div key={index} className="p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-gray-50 bg-white shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-300">
                                        <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                                            {React.cloneElement(detail.icon, { size: 24 })}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black mb-3 text-gray-900">
                                            {detail.title}
                                        </h3>
                                        {detail.link ? (
                                            <a href={detail.link} target="_blank" rel="noreferrer" className="text-sm md:text-base opacity-70 font-semibold hover:text-primary transition-colors break-words text-gray-700">
                                                {detail.content}
                                            </a>
                                        ) : (
                                            <p className="text-sm md:text-base opacity-70 font-semibold text-gray-700">{detail.content}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Social Media Links */}
                            <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-50 bg-white shadow-xl shadow-gray-200/50">
                                <h3 className="text-xl md:text-2xl font-black mb-6 text-gray-900">Follow Our Journey</h3>
                                <div className="flex gap-3 md:gap-4 flex-wrap">
                                    {[RiFacebookBoxLine, RiInstagramLine, RiLinkedinLine, RiTwitterFill].map((Icon, i) => (
                                        <a key={i} href="#" className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                            <Icon size={24} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-gray-50 bg-white shadow-2xl shadow-gray-200/30 transition-all duration-300">
                            <h3 className="text-2xl md:text-3xl font-black mb-8 text-gray-900">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60 ml-2">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100 outline-none transition-all duration-300 font-bold bg-gray-50 focus:border-primary focus:bg-white text-gray-900 text-sm md:text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60 ml-2">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100 outline-none transition-all duration-300 font-bold bg-gray-50 focus:border-primary focus:bg-white text-gray-900 text-sm md:text-base"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60 ml-2">Subject</label>
                                    <input
                                        required
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100 outline-none transition-all duration-300 font-bold bg-gray-50 focus:border-primary focus:bg-white text-gray-900 text-sm md:text-base"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60 ml-2">Your Message</label>
                                    <textarea
                                        required
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project or inquiry..."
                                        className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-100 outline-none transition-all duration-300 font-bold resize-none bg-gray-50 focus:border-primary focus:bg-white text-gray-900 text-sm md:text-base"
                                    />
                                </div>
                                <button type="submit" className="w-full py-4 md:py-5 bg-primary hover:bg-orange-700 text-white rounded-xl md:rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-orange-500/30 transform hover:-translate-y-1 active:scale-95">
                                    Send Message
                                    <RiSendPlaneFill size={24} />
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Map Section */}
                    <div className="mt-16 md:mt-24 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100 h-[350px] md:h-[500px] shadow-2xl relative group bg-gray-50">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.825227181691!2d81.0456209!3d26.8773243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be293f0b24013%3A0xf6f74a00b0d367f0!2sAnora%20Kala%2C%20Faizabad%20Road%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Biosoftech Office Location"
                        ></iframe>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;