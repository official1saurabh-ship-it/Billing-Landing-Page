import React, { useState, useEffect } from "react";
import {
    RiProfileFill,
    RiMailLine,
    RiPhoneLine,
    RiMapPinLine,
} from "@remixicon/react";
import sitemap from "../assets/sitemap.png";

const Login = ({ onClose }) => {
    useEffect(() => {
        console.log("%c[Login] Component Mounted", "color: #3b82f6; font-weight: bold; font-size: 14px;");
    }, []);

    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        contactNo: "",
        location: "",
        additionalInfo: ""
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.contactNo.trim()) newErrors.contactNo = "Contact number is required";
        if (!formData.location.trim()) newErrors.location = "Location is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.group("🔐 Account Creation Submission");
        console.log("Form Data Snapshot:", formData);

        const isValid = validate();
        console.log("Is Form Valid?:", isValid ? "✅ YES" : "❌ NO");

        if (isValid) {
            console.log("%cSUCCESS: Account data ready for submission", "color: #22c55e; font-weight: bold;");
            alert("Account created successfully (simulation)!");
            if (onClose) onClose();
        } else {
            console.warn("VALIDATION FAILED: Please check errors");
            console.table(new Object({
                companyName: formData.companyName || "MISSING",
                email: formData.email || "MISSING",
                contactNo: formData.contactNo || "MISSING",
                location: formData.location || "MISSING"
            }));
        }
        console.groupEnd();
    };

    return (
        <div className={`${onClose ? 'fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] p-4 flex items-center justify-center' : 'min-h-screen bg-gray-100 flex items-center justify-center p-4'}`}>
            <form 
                onSubmit={handleSubmit} 
                noValidate
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl custom-scrollbar"
            >
                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-5 right-7 text-gray-400 hover:text-orange-500 text-2xl transition"
                    >
                        ✖
                    </button>
                )}

                <div className="flex flex-col items-center text-gray-900 p-6 md:p-10">
                    {/* Heading */}
                    <h1 className="text-2xl md:text-4xl text-center font-black leading-tight text-gray-900">
                        Create an <span className="text-orange-500">Account</span> (Free)
                    </h1>

                    <p className="font-bold mt-2 text-center text-gray-500 text-sm md:text-base">
                        We Maintain Your Data Privacy, 100% safe & secure
                    </p>

                    {/* Form */}
                    <div className="mt-8 flex flex-col gap-5 w-full">
                        <h3 className="text-center font-black text-base md:text-lg opacity-90 uppercase tracking-widest text-orange-500">No Payment Required</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Company Name */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Company Name</p>
                                <div className={`flex items-center gap-3 border-2 rounded-xl px-4 py-2.5 transition-all duration-300 ${errors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-orange-500 focus-within:bg-white'}`}>
                                    <RiProfileFill className={errors.companyName ? "text-red-500" : "text-gray-400 focus-within:text-orange-500"} size={18} />
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="Company Name"
                                        className="bg-transparent outline-none text-gray-900 placeholder-gray-400 w-full text-sm font-bold"
                                    />
                                </div>
                                {errors.companyName && <span className="text-red-500 text-[10px] font-bold ml-4">{errors.companyName}</span>}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</p>
                                <div className={`flex items-center gap-3 border-2 rounded-xl px-4 py-2.5 transition-all duration-300 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-orange-500 focus-within:bg-white'}`}>
                                    <RiMailLine className={errors.email ? "text-red-500" : "text-gray-400 focus-within:text-orange-500"} size={18} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="E-mail"
                                        className="bg-transparent outline-none text-gray-900 placeholder-gray-400 w-full text-sm font-bold"
                                    />
                                </div>
                                {errors.email && <span className="text-red-500 text-[10px] font-bold ml-4">{errors.email}</span>}
                            </div>

                            {/* Contact */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Contact No.</p>
                                <div className={`flex items-center gap-3 border-2 rounded-xl px-4 py-2.5 transition-all duration-300 ${errors.contactNo ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-orange-500 focus-within:bg-white'}`}>
                                    <RiPhoneLine className={errors.contactNo ? "text-red-500" : "text-gray-400 focus-within:text-orange-500"} size={18} />
                                    <input
                                        type="text"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        placeholder="Contact No."
                                        className="bg-transparent outline-none text-gray-900 placeholder-gray-400 w-full text-sm font-bold"
                                    />
                                </div>
                                {errors.contactNo && <span className="text-red-500 text-[10px] font-bold ml-4">{errors.contactNo}</span>}
                            </div>

                            {/* Location */}
                            <div className="flex flex-col gap-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Location</p>
                                <div className={`flex items-center gap-3 border-2 rounded-xl px-4 py-2.5 transition-all duration-300 ${errors.location ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50 focus-within:border-orange-500 focus-within:bg-white'}`}>
                                    <RiMapPinLine className={errors.location ? "text-red-500" : "text-gray-400 focus-within:text-orange-500"} size={18} />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Enter Your Location"
                                        className="bg-transparent outline-none text-gray-900 placeholder-gray-400 w-full text-sm font-bold"
                                    />
                                </div>
                                {errors.location && <span className="text-red-500 text-[10px] font-bold ml-4">{errors.location}</span>}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="flex flex-col gap-1.5">
                            <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Additional Info</p>
                            <div className="flex items-center gap-3 border-2 border-gray-100 bg-gray-50 rounded-xl px-4 py-2.5 transition-all duration-300 focus-within:border-orange-500 focus-within:bg-white">
                                <img src={sitemap} className="w-5 h-5 opacity-40" alt="" />
                                <input
                                    type="text"
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    placeholder="Enter any additional info"
                                    className="bg-transparent outline-none text-gray-900 placeholder-gray-400 w-full text-sm font-bold"
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <p className="text-[10px] md:text-xs text-center text-gray-400 mt-2 font-bold uppercase tracking-widest">
                            I agree to the <span className="underline cursor-pointer hover:text-orange-500 transition text-gray-600">Terms and Conditions</span>
                        </p>

                        {/* Button */}
                        <button 
                            type="submit" 
                            className="mt-2 bg-orange-500 text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-500/20 hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest"
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