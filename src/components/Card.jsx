import React from 'react';

const Card = ({ image, heading, description }) => {
    return (
        <div className={`relative w-full h-full ${image ? "pt-12 md:pt-16" : ""}`}>
            <div
                className={`relative h-full rounded-[2rem] md:rounded-3xl pb-6 px-4 md:px-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col items-center justify-center bg-orange-500 ${image ? "pt-20 md:pt-[100px]" : "pt-8"}`}
            >
                {image && (
                    <img
                        className="w-3/4 md:w-[80%] h-24 md:h-[150px] object-cover rounded-xl border-4 border-white absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 z-10 shadow-lg"
                        src={image}
                        alt=""
                    />
                )}

                <div>
                    <h2 className="text-xl md:text-3xl font-black inline-block text-black leading-tight">
                        {heading}
                    </h2>

                    <p className="text-sm md:text-xl font-bold text-white mt-3 md:mt-4 px-2 leading-relaxed opacity-90">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;