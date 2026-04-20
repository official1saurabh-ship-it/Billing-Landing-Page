import React, { useState } from "react";
import { serviceData } from "../data/options"
import CheckboxTree from "./CheckboxTree";

const DemoForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        country: "",
        company: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
            <form
                onSubmit={handleSubmit}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 rounded-3xl shadow-2xl custom-scrollbar"
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-5 right-7 text-white/70 hover:text-white text-2xl transition"
                >
                    ✖
                </button>

                <div className="flex flex-col items-center text-white p-6 md:p-10">
                    {/* Heading */}
                    <h1 className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-3xl md:text-4xl text-center font-bold">
                        Request For Demo
                    </h1>

                    <p className="font-medium mt-2 text-center text-white/80">
                        We Maintain Your Data Privacy, 100% safe & secure
                    </p>

                    {/* Form Fields */}
                    <div className="mt-8 flex flex-col gap-5 w-full">
                        <h3 className="text-center font-semibold text-lg">No Payment Required</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div>
                                <p className="mb-1.5 ml-1 text-sm font-medium">Your Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-2.5 outline-none focus:border-white transition placeholder:text-white/40"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <p className="mb-1.5 ml-1 text-sm font-medium">Email Address</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.com"
                                    className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-2.5 outline-none focus:border-white transition placeholder:text-white/40"
                                />
                            </div>

                            {/* Contact */}
                            <div>
                                <p className="mb-1.5 ml-1 text-sm font-medium">Contact No.</p>
                                <input
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    placeholder="+91 0000000000"
                                    className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-2.5 outline-none focus:border-white transition placeholder:text-white/40"
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <p className="mb-1.5 ml-1 text-sm font-medium">Country Name</p>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Enter your country"
                                    className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-2.5 outline-none focus:border-white transition placeholder:text-white/40"
                                />
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <p className="mb-1.5 ml-1 text-sm font-medium">Company Name</p>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Enter your company name"
                                className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-2.5 outline-none focus:border-white transition placeholder:text-white/40"
                            />
                        </div>

                        <CheckboxTree data={serviceData} />

                        {/* Project Description */}
                        <div>
                            <p className="mb-1.5 ml-1 text-sm font-medium">Project Description / Additional Information</p>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Tell us more about your requirements..."
                                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-3 outline-none focus:border-white transition placeholder:text-white/40 min-h-[100px] resize-none custom-scrollbar"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="mt-4 bg-gradient-to-r from-red-500 to-orange-500 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DemoForm;