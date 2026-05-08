import React, { useState, useEffect } from "react";
import { serviceData } from "../data/options"
import CheckboxTree from "./CheckboxTree";

const DemoForm = ({ onClose }) => {
    useEffect(() => {
        console.log("%c[DemoForm] Component Mounted", "color: #a855f7; font-weight: bold; font-size: 14px;");
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        country: "",
        company: "",
        description: ""
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.contact.trim()) newErrors.contact = "Contact number is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";

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
        console.group("🎥 Demo Request Submission");
        console.log("Form Data Snapshot:", formData);

        const isValid = validate();
        console.log("Is Form Valid?:", isValid ? "✅ YES" : "❌ NO");

        if (isValid) {
            console.log("%cSUCCESS: Demo request data ready", "color: #22c55e; font-weight: bold;");
            alert("Demo request submitted successfully!");
            onClose();
        } else {
            console.warn("VALIDATION FAILED: Please check errors");
            console.table(new Object({
                name: formData.name || "MISSING",
                email: formData.email || "MISSING",
                contact: formData.contact || "MISSING",
                country: formData.country || "MISSING"
            }));
        }
        console.groupEnd();
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
            <form
                onSubmit={handleSubmit}
                noValidate
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl custom-scrollbar"
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-5 right-7 text-gray-400 hover:text-orange-500 text-2xl transition"
                >
                    ✖
                </button>

                <div className="flex flex-col items-center text-gray-900 p-6 md:p-10">
                    {/* Heading */}
                    <h1 className="text-2xl md:text-4xl text-center font-black leading-tight text-gray-900">
                        Request For <span className="text-orange-500">Demo</span>
                    </h1>

                    <p className="font-bold mt-2 text-center text-gray-500 text-sm md:text-base">
                        We Maintain Your Data Privacy, 100% safe & secure
                    </p>

                    {/* Form Fields */}
                    <div className="mt-8 flex flex-col gap-5 w-full">
                        <h3 className="text-center font-black text-base md:text-lg opacity-90 uppercase tracking-widest text-orange-500">No Payment Required</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div className="space-y-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Your Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-2.5 outline-none transition-all duration-300 placeholder:text-gray-400 font-bold text-sm ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-100 focus:border-orange-500 focus:bg-white'}`}
                                />
                                {errors.name && <p className="text-red-500 text-[10px] font-bold ml-4">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.com"
                                    className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-2.5 outline-none transition-all duration-300 placeholder:text-gray-400 font-bold text-sm ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-100 focus:border-orange-500 focus:bg-white'}`}
                                />
                                {errors.email && <p className="text-red-500 text-[10px] font-bold ml-4">{errors.email}</p>}
                            </div>

                            {/* Contact */}
                            <div className="space-y-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Contact No.</p>
                                <input
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    placeholder="+91 0000000000"
                                    className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-2.5 outline-none transition-all duration-300 placeholder:text-gray-400 font-bold text-sm ${errors.contact ? 'border-red-500 bg-red-50' : 'border-gray-100 focus:border-orange-500 focus:bg-white'}`}
                                />
                                {errors.contact && <p className="text-red-500 text-[10px] font-bold ml-4">{errors.contact}</p>}
                            </div>

                            {/* Location */}
                            <div className="space-y-1.5">
                                <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Country Name</p>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Enter your country"
                                    className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-2.5 outline-none transition-all duration-300 placeholder:text-gray-400 font-bold text-sm ${errors.country ? 'border-red-500' : 'border-red-50  focus:border-orange-500 focus:bg-white'}`}
                                />
                                {errors.country && <p className="text-red-500 text-[10px] font-bold ml-4">{errors.country}</p>}
                            </div>
                        </div>

                        {/* Company */}
                        <div className="space-y-1.5">
                            <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Company Name</p>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Enter your company name"
                                className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-2.5 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white placeholder:text-gray-400 font-bold text-sm"
                            />
                        </div>

                        <CheckboxTree data={serviceData} />

                        {/* Project Description */}
                        <div className="space-y-1.5">
                            <p className="ml-1 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">Additional Information</p>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Tell us more about your requirements..."
                                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-3 outline-none transition-all duration-300 focus:border-orange-500 focus:bg-white placeholder:text-gray-400 min-h-[100px] resize-none custom-scrollbar font-bold text-sm"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-4 bg-orange-500 text-white py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-500/20 hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest"
                        >
                            Submit Request
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DemoForm;