import React from 'react';

const FeatureCard = ({ title }) => {
    return (
        <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-500/30 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {title}
            </p>
        </div>
    );
};

export default FeatureCard;