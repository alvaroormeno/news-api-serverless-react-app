import React, { useContext } from 'react'
import NewsCard from './NewsCard'
import { GlobalContext } from '../GlobalContext'

const Layout = (props) => {

  const { newsData } = useContext(GlobalContext)
  console.log(newsData)

  return (

    
    
    <main className='h-screen w-screen bg-gradient-to-b from-violet-500 to-fuchsia-500 ' >

        {/* NAVBAR */}
        <div className='flex flex-row h-[120px] justify-center items-center text-4xl font-[800] text-white '>
            Top US News Now ! 
        </div>

        {/* NEWS CARDS SECTION */}
        <div className='grid grid-cols-3 gap-6 mx-[100px] '>

          {newsData && newsData.articles.map(news => (
            <NewsCard data={news} key={news.title} />
          ))}
            
            



        </div>

    </main>



  )
}

export default Layout