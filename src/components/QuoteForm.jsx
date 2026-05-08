
import { useState, useEffect } from "react";

const QuoteForm = () => {
    useEffect(() => {
        console.log("%c[QuoteForm] Component Mounted", "color: #f97316; font-weight: bold; font-size: 14px;");
    }, []);

    const [formData, setFormData] = useState(() => {
        try {
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
        } catch (e) {
            console.error("Error loading data from localStorage:", e);
            return { name: "", email: "", phone: "", country: "", company: "", messagingApp: "", messangerId: "", feature: "", description: "" };
        }
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.country) newErrors.country = "Please select a country";
        if (!formData.messagingApp) newErrors.messagingApp = "Please select a messaging app";
        if (!formData.messangerId.trim()) newErrors.messangerId = "Messenger ID is required";
        if (!formData.feature) newErrors.feature = "Please select a feature";
        if (!formData.description.trim()) newErrors.description = "Description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.group("🚀 Quote Form Submission");
        console.log("Submission Time:", new Date().toLocaleString());
        console.log("Form Data Snapshot:", formData);
        
        setIsSubmitted(true);
        const isValid = validate();
        console.log("Is Form Valid?:", isValid ? "✅ YES" : "❌ NO");

        if (isValid) {
            try {
                localStorage.setItem("quoteForm", JSON.stringify(formData));
                console.log("%cSUCCESS: Data saved to localStorage", "color: #22c55e; font-weight: bold;");
                alert("Quotation request sent successfully!");
            } catch (err) {
                console.error("FAILED to save to localStorage:", err);
            }
        } else {
            console.warn("VALIDATION FAILED: Please fix the following errors:");
            // Immediate validation for logging purposes
            let validationErrors = {};
            if (!formData.name.trim()) validationErrors.name = "Name is required";
            if (!formData.email.trim()) validationErrors.email = "Email is required";
            if (!formData.phone.trim()) validationErrors.phone = "Phone number is required";
            if (!formData.country) validationErrors.country = "Country missing";
            console.table(validationErrors);
        }
        console.groupEnd();
    };

    return (
        <div className="w-full mx-auto rounded-3xl shadow-2xl my-10 md:my-20 overflow-hidden transition-all duration-300 hover:shadow-2xl bg-white">
            <div className="p-6 md:p-12">
                <div className="mb-8 md:mb-10 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-2 leading-tight text-center">
                        Get Your Custom Quotation
                    </h2>
                    <p className="text-orange-500 text-base md:text-lg font-medium opacity-90 text-center">
                        Please fill out the details below and our team will get back to you within 24 hours.
                    </p>
                    <div className="h-1.5 w-20 bg-orange-500 mt-4 rounded-full mx-auto"></div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 md:gap-y-6">
                    {/* Your Name */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-orange-50/50 border-2 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:bg-white placeholder:text-gray-400 text-sm md:text-base ${errors.name ? 'border-red-500' : 'border-orange-100 focus:border-orange-500'}`}
                            placeholder="John Doe"
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</span>}
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-orange-50/50 border-2 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:bg-white placeholder:text-gray-400 text-sm md:text-base ${errors.email ? 'border-red-500' : 'border-orange-100 focus:border-orange-500'}`}
                            placeholder="john@example.com"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</span>}
                    </div>

                    {/* Contact Number */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full bg-orange-50/50 border-2 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:bg-white placeholder:text-gray-400 text-sm md:text-base ${errors.phone ? 'border-red-500' : 'border-orange-100 focus:border-orange-500'}`}
                            placeholder="+1 234 567 890"
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</span>}
                    </div>

                    {/* Country */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className={`w-full bg-orange-50/50 border-2 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:bg-white cursor-pointer appearance-none text-sm md:text-base ${errors.country ? 'border-red-500' : 'border-orange-100 focus:border-orange-500'}`}
                            >
                                <option value="">Select Country</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="uae">UAE</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-orange-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {errors.country && <span className="text-red-500 text-xs mt-1 font-semibold">{errors.country}</span>}
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-orange-50/50 border-2 border-orange-100 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:border-orange-500 focus:bg-white placeholder:text-gray-400 text-sm md:text-base"
                            placeholder="Your Company Ltd"
                        />
                    </div>

                    {/* Messaging App */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Preferred Messaging App <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                name="messagingApp"
                                value={formData.messagingApp}
                                onChange={handleChange}
                                className={`w-full bg-orange-50/50 border-2 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:bg-white cursor-pointer appearance-none text-sm md:text-base ${errors.messagingApp ? 'border-red-500' : 'border-orange-100 focus:border-orange-500'}`}
                            >
                                <option value="">Select App</option>
                                <option value="whatsapp">WhatsApp</option>
                                <option value="telegram">Telegram</option>
                                <option value="skype">Skype</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-orange-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {errors.messagingApp && <span className="text-red-500 text-xs mt-1 font-semibold">{errors.messagingApp}</span>}
                    </div>

                    {/* Messenger ID */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Messenger ID / Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="messangerId"
                            value={formData.messangerId}
                            onChange={handleChange}
                            className={`w-full bg-orange-50/50 border-2 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:bg-white placeholder:text-gray-400 text-sm md:text-base ${errors.messangerId ? 'border-red-500' : 'border-orange-100 focus:border-orange-500'}`}
                            placeholder="Username or ID"
                        />
                        {errors.messangerId && <span className="text-red-500 text-xs mt-1 font-semibold">{errors.messangerId}</span>}
                    </div>

                    {/* Software Feature */}
                    <div className="flex flex-col group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Interested Software Feature <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                name="feature"
                                value={formData.feature}
                                onChange={handleChange}
                                className={`w-full bg-orange-50/50 border-2 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:bg-white cursor-pointer appearance-none text-sm md:text-base ${errors.feature ? 'border-red-500' : 'border-orange-100 focus:border-orange-500'}`}
                            >
                                <option value="">Select Feature</option>
                                <option value="erp">ERP System</option>
                                <option value="crm">CRM Tool</option>
                                <option value="hrm">HRM & Payroll</option>
                                <option value="ecommerce">E-Commerce</option>
                                <option value="custom">Custom Solution</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-orange-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {errors.feature && <span className="text-red-500 text-xs mt-1 font-semibold">{errors.feature}</span>}
                    </div>

                    {/* Project Description */}
                    <div className="flex flex-col md:col-span-2 group">
                        <label className="text-xs md:text-sm font-bold text-orange-600 mb-2 transition-colors">
                            Project Description / Additional Information <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="5"
                            className={`w-full bg-orange-50/50 border-2 rounded-xl px-4 py-2.5 md:py-3 text-gray-900 outline-none transition-all focus:bg-white placeholder:text-gray-400 resize-none text-sm md:text-base ${errors.description ? 'border-red-500' : 'border-orange-100 focus:border-orange-500'}`}
                            placeholder="Tell us about your project requirements and goals..."
                        ></textarea>
                        {errors.description && <span className="text-red-500 text-xs mt-1 font-semibold">{errors.description}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-center md:justify-end mt-4">
                        <button
                            type="submit"
                            className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-3.5 md:py-4 font-bold text-white transition-all duration-200 bg-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600 shadow-xl active:scale-95"
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