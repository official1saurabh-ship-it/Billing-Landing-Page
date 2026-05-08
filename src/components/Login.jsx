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
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-orange-700 via-amber-800 to-orange-900 rounded-3xl shadow-2xl custom-scrollbar"
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
                    <h1 className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-2xl md:text-4xl text-center font-black leading-tight">
                        Create an Account (Free)
                    </h1>

                    <p className="font-bold mt-2 text-center text-white/80 text-sm md:text-base">
                        We Maintain Your Data Privacy, 100% safe & secure
                    </p>

                    {/* Form */}
                    <div className="mt-8 flex flex-col gap-5 w-full">
                        <h3 className="text-center font-black text-base md:text-lg opacity-90 uppercase tracking-widest">No Payment Required</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Company Name */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60">Company Name</p>
                                <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                    <RiProfileFill className="text-white/40" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="bg-transparent outline-none text-white placeholder-white/30 w-full text-sm font-bold"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60">Email Address</p>
                                <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                    <RiMailLine className="text-white/40" size={18} />
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="bg-transparent outline-none text-white placeholder-white/30 w-full text-sm font-bold"
                                    />
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60">Contact No.</p>
                                <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                    <RiPhoneLine className="text-white/40" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Contact No."
                                        className="bg-transparent outline-none text-white placeholder-white/30 w-full text-sm font-bold"
                                    />
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60">Location</p>
                                <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                    <RiMapPinLine className="text-white/40" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Enter Your Location"
                                        className="bg-transparent outline-none text-white placeholder-white/30 w-full text-sm font-bold"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Reseller/Other */}
                        <div className="flex flex-col gap-1.5">
                            <p className="ml-1 text-[10px] md:text-xs font-black uppercase tracking-wider opacity-60">Additional Info</p>
                            <div className="flex items-center gap-3 border border-white/20 rounded-full px-4 py-2.5 bg-white/10 backdrop-blur-md focus-within:border-white transition">
                                <img src={sitemap} className="w-5 h-5 opacity-40 invert" alt="" />
                                <input
                                    type="text"
                                    placeholder="Enter Your Location"
                                    className="bg-transparent outline-none text-white placeholder-white/30 w-full text-sm font-bold"
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <p className="text-[10px] md:text-xs text-center text-white/60 mt-2 font-bold uppercase tracking-widest">
                            I agree to the <span className="underline cursor-pointer hover:text-white transition">Terms and Conditions</span>
                        </p>

                        {/* Button */}
                        <button 
                            type="submit" 
                            className="mt-2 bg-gradient-to-r from-amber-500 to-orange-500 py-4 rounded-full font-black text-lg shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest"
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