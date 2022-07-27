import React from 'react'
import NewsCard from './NewsCard'

const Layout = () => {
  return (
    
    <main className='h-screen w-screen bg-gradient-to-b from-violet-500 to-fuchsia-500 ' >

        {/* NAVBAR */}
        <div className='flex flex-row h-[120px] justify-center items-center text-4xl font-[800] text-white '>
            Top US News Now ! 
        </div>

        {/* NEWS CARDS SECTION */}
        <div className='grid grid-cols-4 gap-6 mx-[100px] '>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            


        </div>

    </main>



  )
}

export default Layout