import React from 'react'
import comment from '../assets/comments.png'


const CardAbout = ({ comment, name, paragraph }) => {
    return (
        <div className="min-h-[120px] w-full max-w-[160px] md:max-w-[200px] flex flex-col bg-white dark:bg-gray-800 p-4 md:p-6 rounded-[2rem] justify-center items-center shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300">
            <div className='h-10 w-10 md:h-12 md:w-12 rounded-full mb-3 flex items-center justify-center bg-gray-50 overflow-hidden p-2'>
                <img src={comment} alt={name} className="w-full h-full object-contain" />
            </div>
            <div className='text-gray-900 dark:text-white font-black text-xs md:text-sm uppercase tracking-wider text-center'>{name}</div>
            {paragraph && <div className="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs text-center mt-1">{paragraph}</div>}
        </div>
    )
}

export default CardAbout