import React from "react";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

const plans = [
    {
        name: "Silver",
        price: "₹2,999",
        oldPrice: "₹3,999",
        desc: "Essential for small businesses",
        highlight: false,
        features: [
            "Up to 5 Users",
            "Up to 500 Products",
            "Basic Reports",
            "Email Support",
        ],
    },
    {
        name: "Gold",
        price: "₹4,999",
        oldPrice: "₹5,999",
        desc: "Best for growing businesses",
        highlight: true,
        features: [
            "Up to 10 Users",
            "Up to 1000 Products",
            "Advanced Reports",
            "PDF Export",
            "Priority Support",
        ],
    },
    {
        name: "Premium",
        price: "₹7,999",
        oldPrice: "₹9,999",
        desc: "Full power for enterprises",
        highlight: false,
        features: [
            "Unlimited Users",
            "Unlimited Products",
            "All Reports & Analytics",
            "API Access",
            "White-label Branding",
        ],
    },
];

const Pricing = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-x-hidden">

            {/* FIXED HEADER */}
            <div className="fixed w-full top-0 left-0 z-50 border-b border-gray-200 bg-white shadow-sm">
                <Header1 />
                <Header />
            </div>

            <main className="flex-grow pt-[160px] md:pt-[240px] pb-32 px-4 md:px-8">
                <div className=" mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-xs md:text-sm block mb-4">Pricing Plans</span>
                        <h1 className="text-4xl md:text-7xl font-black mb-6 text-gray-900 leading-tight">Choose Your <span className="text-orange-500">Perfect Plan</span></h1>
                        <p className="text-lg md:text-2xl opacity-80 max-w-3xl mx-auto leading-relaxed text-gray-600 font-medium">
                            Simple pricing. No hidden charges. Scalable solutions for businesses of all sizes.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-3xl p-6 md:p-8 border transition-all duration-500 flex flex-col min-h-[500px] md:min-h-[550px] group hover:-translate-y-6 hover:z-50
                                    ${plan.highlight
                                        ? 'bg-white border-primary shadow-2xl shadow-orange-500/20 z-10 lg:scale-105 hover:scale-[1.12] hover:shadow-orange-500/50'
                                        : 'bg-white border-gray-100 shadow-xl shadow-gray-200/50 hover:scale-[1.1] hover:shadow-2xl hover:shadow-orange-500/30 hover:border-orange-500/40'
                                    }`}
                            >

                                {/* Badge */}
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 md:px-6 py-1.5 text-[10px] md:text-xs font-black rounded-full shadow-lg uppercase tracking-widest whitespace-nowrap">
                                        Most Popular
                                    </div>
                                )}

                                {/* Title */}
                                <h2 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">{plan.name}</h2>

                                {/* Pricing */}
                                <div className="mb-6">
                                    <span className="line-through opacity-50 text-sm md:text-base font-bold text-gray-500">
                                        {plan.oldPrice}
                                    </span>
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <h3 className="text-3xl md:text-5xl font-black text-primary">
                                            {plan.price}
                                        </h3>
                                        <span className="opacity-60 text-sm md:text-base font-bold text-gray-600">/ year</span>
                                    </div>
                                </div>

                                <p className="text-base md:text-lg opacity-70 mb-8 font-medium leading-relaxed text-gray-700">{plan.desc}</p>

                                {/* Features */}
                                <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                            <span className="text-sm md:text-base opacity-90 font-medium text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <a href="https://billing.biosoftech.in/register">
                                    <button
                                        className={`w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all duration-300 transform hover:translate-y-[-4px] active:scale-95
                                        ${plan.highlight
                                                ? "bg-orange-500 hover:bg-orange-700 text-white shadow-xl shadow-orange-500/40"
                                                : "bg-orange-500 hover:bg-orange-700 text-white shadow-lg"
                                            }`}
                                    >
                                        Get Started
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;