import React, { useContext, useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { GlobalContext } from '../GlobalContext'
import SearchBar from './SearchBar';
import Pagination from './Pagination';
const { DateTime } = require("luxon");



const Layout = (props) => {


  const { newsData, currentPosts, postsPerPage , totalposts, paginate } = useContext(GlobalContext)
  //console.log(totalposts)

  const [sampleData, setSampleData] = useState( )
  const [originalState, setOrginalState] = useState(true)

  


  

  useEffect(() => {
    setSampleData(currentPosts)
    //console.log(sampleData)
  }, [currentPosts])

  

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

  //  const dt = DateTime.fromISO(data.publishedAt)
  //   console.log(dt)

  let i = 1

  return (

    
    
    <main className='h-[100%] w-screen bg-gradient-to-b from-violet-500 to-fuchsia-500 ' >

        {/* NAVBAR */}
        <div className='flex flex-col h-[150px] justify-center items-center gap-4'>
            <h1 className='text-5xl font-[800] text-white'>NEWS NOW!</h1>  
            <SearchBar/>
            <button onClick={handleSort}> 
              {originalState ? "Sort Alphabetically" : "Sort by Date"}
            </button>
        </div>
        
        {/* <form action="">
          <input type="text" placeholder='search news' />
          <button type='submit'></button>
        </form> */}


        


        {/* NEWS CARDS SECTION */}
        <div className='grid grid-cols-3 gap-6 mx-[100px] '>

          {sampleData && sampleData.map(news => 
            <NewsCard data={news} key={i++} index={i++} />
          )}

          <Pagination postsPerPage={postsPerPage} totalPosts={totalposts} paginate={paginate}/>
          
          {/* {listComponents} */}
            



        </div>

    </main>



  )
}

export default Layout