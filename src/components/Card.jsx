import { useState } from "react";

const Card = ({ image, heading, description, index }) => {
    const colors = [
        {
            bg: "bg-blue-100",
            border: "border-blue-500",
            gradient: "from-blue-500 to-indigo-500",
        },
        {
            bg: "bg-green-100",
            border: "border-green-500",
            gradient: "from-green-500 to-emerald-500",
        },
        {
            bg: "bg-purple-100",
            border: "border-purple-500",
            gradient: "from-purple-500 to-pink-500",
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
            className={`relative w-full h-full perspective-1000 ${image ? "pt-16" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: rotate.x === 0 ? "all 0.5s ease" : "none",
                    transformStyle: "preserve-3d"
                }}
                className={`relative h-full rounded-3xl pb-4 px-4 text-center shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col items-center justify-center ${color.bg} dark:bg-gray-800 ${image ? "pt-[100px]" : "pt-6"}`}
            >
                {image && (
                    <img
                        style={{
                            transform: "translateZ(50px)", // Makes image pop out
                        }}
                        className={`w-[80%] h-[150px] object-cover rounded-xl border-4 absolute -top-16 left-1/2 -translate-x-1/2 z-10 shadow-lg ${color.border} `}
                        src={image}
                        alt=""
                    />
                )}

                <div style={{ transform: "translateZ(30px)" }}>
                    <h2
                        className={`text-3xl font-bold inline-block bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent`}
                    >
                        {heading}
                    </h2>

                    <p className="text-2xl font-bold text-gray-700 dark:text-gray-200 mt-2 px-2 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;