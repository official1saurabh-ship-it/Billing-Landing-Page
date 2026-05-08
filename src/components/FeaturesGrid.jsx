import React from 'react';
import { billingFeatures, reportsFeatures } from '../data/featuresGridData';

const FeatureItem = ({ number, text }) => (
    <div className="flex items-start py-4 border-b border-gray-100 last:border-0 group transition-all duration-300 px-4 -mx-4 rounded-lg hover:bg-orange-50/50">
        <span className="text-primary font-bold mr-4 min-w-[28px] text-lg leading-6">
            {number}.
        </span>
        <span className="font-medium leading-relaxed transition-colors duration-300 group-hover:text-primary text-gray-900">
            {text}
        </span>
    </div>
);

const FeatureColumn = ({ title, items }) => (
    <div className="flex flex-col h-full p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 bg-white transition-all duration-300">
        <div className="mb-10 inline-block">
            <h3 className="text-2xl font-black mb-2 text-gray-900">
                {title}
            </h3>
            <div className="h-1.5 w-16 bg-primary rounded-full shadow-sm shadow-orange-500/50"></div>
        </div>

        <div className="flex flex-col">
            {items.map((feature, index) => (
                <FeatureItem
                    key={index}
                    number={index + 1}
                    text={feature}
                />
            ))}
        </div>
    </div>
);

const FeaturesGrid = () => {
    return (
        <section className="py-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <FeatureColumn
                        title="Billing and Accounting Features"
                        items={billingFeatures}
                    />
                    <FeatureColumn
                        title="Comprehensive Reports"
                        items={reportsFeatures}
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;