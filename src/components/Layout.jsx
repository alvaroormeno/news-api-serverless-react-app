import React, { useContext, useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { GlobalContext } from '../GlobalContext'

const Layout = (props) => {

  const { newsData } = useContext(GlobalContext)
  //console.log(newsData)

  const [sampleData, setSampleData] = useState( )
  const [originalState, setOrginalState] = useState(true)
  

  useEffect(() => {
    setSampleData(newsData)
    console.log(sampleData)
  }, [newsData])

  

  const handleSort = () => {

    if (originalState) {
      console.log('handle sort works')
      const sortedData = [...sampleData].sort((a,b) => {
        return a.title > b.title ? 1 : -1
      })
      setSampleData(sortedData)
      //console.log(sortedData)
      setOrginalState(false)
    } else { 
      setSampleData(newsData)
      setOrginalState(true)
    }
  }

  

  // const listComponents = newsData.articles.map(news => {
  //    return <NewsCard data={news} key={news.title} />
  // })

  return (

    
    
    <main className='h-screen w-screen bg-gradient-to-b from-violet-500 to-fuchsia-500 ' >

        {/* NAVBAR */}
        <div className='flex flex-row h-[120px] justify-center items-center text-4xl font-[800] text-white '>
            Top US News Now ! 
        </div>
        <button onClick={handleSort}> {originalState ? "Sort Alphabetically" : "Sort by Date"}</button>

        {/* NEWS CARDS SECTION */}
        <div className='grid grid-cols-3 gap-6 mx-[100px] '>

          {sampleData && sampleData.map(news => (
            <NewsCard data={news} key={news.title} />
          ))}
          
          {/* {listComponents} */}
            



        </div>

    </main>



  )
}

export default Layout