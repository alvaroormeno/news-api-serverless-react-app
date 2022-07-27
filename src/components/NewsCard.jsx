import React from 'react'
import { GlobalContext, formatTime } from '../GlobalContext'
const { DateTime } = require("luxon");

const NewsCard = ({data, time}) => {

    //const timestamp = new Date(data.publishedAt).getTime();
    //console.log(timestamp)

    const dt = DateTime.fromISO(data.publishedAt)
    //console.log(dt)
    
    //console.log(data)
    console.log(time)


  return (
    
    <main className='flex flex-col bg-white rounded-[10px]'>
        {/* Image */}
        <img className='rounded-t-[10px] h-[220px] object-cover  ' src={data.urlToImage} alt="" />

        {/* Info Container */}
        <div className='flex flex-col gap-2 w-[100%] h-[100%] p-[10px] justify-between'>
            {/* Title */}
            <h1 className='text-[20px] font-[600] leading-6'>{data.title}</h1>

            <hr className='border-[3px] rounded-[5px]'/>
            {/* Description */}
            <h4 className='text-[15px]'>
            {data.description}
            </h4>
            {/* Date Published */}
            <p>{time}</p>

            <hr className='border-[3px] mt-auto rounded-[5px]'/>

            <button className=''>Read Complete Article</button>
        </div>
        
    </main>



  )
}

export default NewsCard