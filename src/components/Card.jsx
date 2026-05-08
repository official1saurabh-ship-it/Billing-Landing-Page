import { useState } from "react";

const Card = ({ image, heading, description, index }) => {
    const colors = [
        {
            bg: "bg-orange-100",
            border: "border-primary",
            gradient: "from-primary to-amber-500",
        },
        {
            bg: "bg-amber-100",
            border: "border-amber-500",
            gradient: "from-amber-500 to-orange-500",
        },
        {
            bg: "bg-yellow-100",
            border: "border-yellow-500",
            gradient: "from-yellow-500 to-primary",
        },
    ];

    // Ultra-safe color selection
    const safeIndex = typeof index === 'number' ? index : 0;
    const color = colors[safeIndex % colors.length] || colors[0];

    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - card.left;
        const y = e.clientY - card.top;
        const centerX = card.width / 2;
        const centerY = card.height / 2;

        // Calculate rotation (max 15 degrees)
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            className={`relative w-full h-full perspective-1000 ${image ? "pt-12 md:pt-16" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: rotate.x === 0 ? "all 0.5s ease" : "none",
                    transformStyle: "preserve-3d"
                }}
                className={`relative h-full rounded-[2rem] md:rounded-3xl pb-6 px-4 md:px-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col items-center justify-center ${color.bg} dark:bg-gray-800 ${image ? "pt-20 md:pt-[100px]" : "pt-8"}`}
            >
                {image && (
                    <img
                        style={{
                            transform: "translateZ(50px)", // Makes image pop out
                        }}
                        className={`w-3/4 md:w-[80%] h-24 md:h-[150px] object-cover rounded-xl border-4 absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 z-10 shadow-lg ${color.border} `}
                        src={image}
                        alt=""
                    />
                )}

                <div style={{ transform: "translateZ(30px)" }}>
                    <h2
                        className={`text-xl md:text-3xl font-black inline-block text-orange-500 leading-tight`}
                    >
                        {heading}
                    </h2>

                    <p className="text-sm md:text-xl font-bold text-gray-700 dark:text-gray-200 mt-3 md:mt-4 px-2 leading-relaxed opacity-90">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;