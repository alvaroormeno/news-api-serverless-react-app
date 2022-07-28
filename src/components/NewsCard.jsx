import React from 'react'
import { formatTime } from '../GlobalContext'
const { DateTime } = require("luxon");

const NewsCard = ({data}) => {
    
  return (
    
    <main className='flex flex-col bg-white rounded-[10px] shadow-xl shadow-indigo-500/50  '>
        {/* Image */}
        <img className='rounded-t-[10px] h-[180px] object-cover  ' src={data.urlToImage} alt="article image" />
        {/* Info Container */}
        <div className='flex flex-col gap-2 w-[100%] h-[100%] p-[10px] justify-between'>
            {/* Title */}
            <h1 className='text-[20px] font-[600] leading-6'>{data.title}</h1>
            {/* Break */}
            <hr className='border-[3px] rounded-[5px]'/>
            {/* Description */}
            <h4 className='text-[15px] leading-5'>
            {data.description}
            </h4>
            {/* Date Published */}
            <p className='mt-auto text-[12px] font-[600]'>
                {formatTime(data.publishedAt)}
            </p>
            {/* Break */}
            <hr className='border-[3px] rounded-[5px]'/>
            {/* Button */}
            <button className='text-[15px] bg-violet-500 w-[180px] mx-auto rounded-[50px] text-white'>
                <a href={data.url} target="_blank">Read Complete Article</a>
            </button>
        </div>
    </main>

  );
};

export default NewsCard