import React from 'react'

const Card1 = ({ image, heading, description, index }) => {
    const colors = [
        {
            bg: "bg-blue-50",
            border: "border-blue-100",
            text: "text-blue-600",
            accent: "bg-blue-600"
        },
        {
            bg: "bg-green-50",
            border: "border-green-100",
            text: "text-green-600",
            accent: "bg-green-600"
        },
        {
            bg: "bg-purple-50",
            border: "border-purple-100",
            text: "text-purple-600",
            accent: "bg-purple-600"
        },
    ];

    const safeIndex = typeof index === 'number' ? index : 0;
    const color = colors[safeIndex % colors.length] || colors[0];

    return (
        <div className={`w-full h-full p-6 md:p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center ${color.bg} border ${color.border} shadow-xl shadow-gray-200/10 transition-all duration-300 hover:shadow-2xl group`}>
            <div className='flex flex-col items-center gap-4 mb-6'>
                {image && (
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-4">
                        {typeof image === 'string' ? (
                            <img className='w-full h-full object-contain' src={image} alt="" />
                        ) : (
                            <div className={`${color.text}`}>
                                {image}
                            </div>
                        )}
                    </div>
                )}
                <div className='font-black text-xl md:text-2xl text-gray-900 leading-tight'> {heading}</div>
            </div>
            <p className='text-sm md:text-lg text-gray-600 font-bold leading-relaxed opacity-80'>{description}</p>
            <div className={`h-1.5 w-12 ${color.accent} mt-6 rounded-full opacity-30`}></div>
        </div>
    )
}

export default Card1