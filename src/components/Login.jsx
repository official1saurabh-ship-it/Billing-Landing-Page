import React from "react";
import {
    RiProfileFill,
    RiMailLine,
    RiPhoneLine,
    RiMapPinLine,
} from "@remixicon/react";
import sitemap from "../assets/sitemap.png";

const Login = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onClose) onClose();
    }

    return (
        <div className={`${onClose ? 'fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] p-4 flex items-center justify-center' : 'min-h-screen bg-gray-400 flex items-center justify-center p-4'}`}>
            <form 
                onSubmit={handleSubmit} 
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 rounded-3xl shadow-2xl custom-scrollbar"
            >
                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-5 right-7 text-white/70 hover:text-white text-2xl transition"
                    >
                        ✖
                    </button>
                )}

                <div className="flex flex-col items-center text-white p-6 md:p-10">
                    {/* Heading */}
                    <h1 className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-3xl md:text-4xl text-center font-bold">
                        Create an Account (Free)
                    </h1>

                    <p className="font-medium mt-2 text-center text-white/80">
                        We Maintain Your Data Privacy, 100% safe & secure
                    </p>

                    {/* Form */}
                    <div className="mt-8 flex flex-col gap-5 w-full">
                        <h3 className="text-center font-semibold text-lg">No Payment Required</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Company Name */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-sm font-medium">Company Name</p>
                                <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                    <RiProfileFill className="text-white/60" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="bg-transparent outline-none text-white placeholder-white/40 w-full text-sm"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-sm font-medium">Email Address</p>
                                <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                    <RiMailLine className="text-white/60" size={20} />
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="bg-transparent outline-none text-white placeholder-white/40 w-full text-sm"
                                    />
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-sm font-medium">Contact No.</p>
                                <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                    <RiPhoneLine className="text-white/60" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Contact No."
                                        className="bg-transparent outline-none text-white placeholder-white/40 w-full text-sm"
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-sm font-medium">Location</p>
                                <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                    <RiMapPinLine className="text-white/60" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Enter Your Location"
                                        className="bg-transparent outline-none text-white placeholder-white/40 w-full text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Reseller/Other */}
                        <div className="flex flex-col gap-1.5">
                            <p className="ml-1 text-sm font-medium">Additional Info</p>
                            <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                <img src={sitemap} className="w-5 h-5 opacity-60 invert" alt="" />
                                <input
                                    type="text"
                                    placeholder="Enter Your Location"
                                    className="bg-transparent outline-none text-white placeholder-white/40 w-full text-sm"
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <p className="text-xs text-center text-white/60 mt-2">
                            I agree to the <span className="underline cursor-pointer hover:text-white transition">Terms and Conditions</span>
                        </p>

                        {/* Button */}
                        <button 
                            type="submit" 
                            className="mt-2 bg-gradient-to-r from-red-500 to-orange-500 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;