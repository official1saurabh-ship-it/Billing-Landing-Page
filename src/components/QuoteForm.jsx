
import { useState } from "react"; // Fixed case for Vercel

const QuoteForm = () => {
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem("quoteForm");
        return savedData ? JSON.parse(savedData) : {
            name: "",
            email: "",
            phone: "",
            country: "",
            company: "",
            messagingApp: "",
            messangerId: "",
            feature: "",
            description: "",
        };
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("quoteForm", JSON.stringify(formData))
        console.log("Saved:", formData);
    };


    return (

        <div className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl my-10 md:my-20 overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 transition-all duration-300 hover:shadow-2xl">
            <div className="p-6 md:p-12">
                <div className="mb-8 md:mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                        Get Your Custom Quotation
                    </h2>
                    <p className="text-blue-100 text-base md:text-lg font-medium opacity-90">
                        Please fill out the details below and our team will get back to you within 24 hours.
                    </p>
                    <div className="h-1.5 w-20 bg-white/30 mt-4 rounded-full mx-auto md:mx-0"></div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-6">
                    {/* Your Name */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Your Name <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-white/40 focus:bg-white/20 placeholder:text-blue-200/50 text-sm md:text-base"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-white/40 focus:bg-white/20 placeholder:text-blue-200/50 text-sm md:text-base"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Contact Number */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Contact Number <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}

                            required
                            className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-blue-300 focus:bg-white/20 placeholder:text-blue-200/50 text-sm md:text-base"
                            placeholder="+1 234 567 890"
                        />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Country <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-white/40 focus:bg-white/20 cursor-pointer appearance-none text-sm md:text-base"
                            >
                                <option value="" className="text-gray-900">Select Country</option>
                                <option value="india" className="text-gray-900">India</option>
                                <option value="usa" className="text-gray-900">USA</option>
                                <option value="uk" className="text-gray-900">UK</option>
                                <option value="uae" className="text-gray-900">UAE</option>
                                <option value="other" className="text-gray-900">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}

                            className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-white/40 focus:bg-white/20 placeholder:text-blue-200/50 text-sm md:text-base"
                            placeholder="Your Company Ltd"
                        />
                    </div>

                    {/* Messaging App */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Preferred Messaging App <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                            <select
                                name="messagingApp"
                                value={formData.messagingApp}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-white/40 focus:bg-white/20 cursor-pointer appearance-none text-sm md:text-base"
                            >
                                <option value="" className="text-gray-900">Select App</option>
                                <option value="whatsapp" className="text-gray-900">WhatsApp</option>
                                <option value="telegram" className="text-gray-900">Telegram</option>
                                <option value="skype" className="text-gray-900">Skype</option>
                                <option value="other" className="text-gray-900">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Messenger ID */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Messenger ID / Number <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            name="messangerId"
                            value={formData.messangerId}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-white/40 focus:bg-white/20 placeholder:text-blue-200/50 text-sm md:text-base"
                            placeholder="Username or ID"
                        />
                    </div>

                    {/* Software Feature */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Interested Software Feature <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                            <select
                                name="feature"
                                value={formData.feature}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-white/40 focus:bg-white/20 cursor-pointer appearance-none text-sm md:text-base"
                            >
                                <option value="" className="text-gray-900">Select Feature</option>
                                <option value="erp" className="text-gray-900">ERP System</option>
                                <option value="crm" className="text-gray-900">CRM Tool</option>
                                <option value="hrm" className="text-gray-900">HRM & Payroll</option>
                                <option value="ecommerce" className="text-gray-900">E-Commerce</option>
                                <option value="custom" className="text-gray-900">Custom Solution</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Project Description */}
                    <div className="flex flex-col md:col-span-2 group">
                        <label className="text-xs md:text-sm font-bold text-blue-50 mb-2 transition-colors group-focus-within:text-white">
                            Project Description / Additional Information <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-2.5 md:py-3 text-white outline-none transition-all focus:border-white/40 focus:bg-white/20 placeholder:text-blue-200/50 resize-none text-sm md:text-base"
                            placeholder="Tell us about your project requirements and goals..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-center md:justify-end mt-4">
                        <button
                            type="submit"
                            className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-3.5 md:py-4 font-bold text-blue-900 transition-all duration-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-blue-50 shadow-xl active:scale-95"
                        >
                            Send Request
                            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuoteForm;