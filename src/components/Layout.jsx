import React, { useContext, useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { GlobalContext } from '../GlobalContext'
import SearchBar from './SearchBar';
import Pagination from './Pagination';
const { DateTime } = require("luxon");



const Layout = (props) => {

  // Values from GlobalContext
  const { newsData, currentPosts, postsPerPage , totalposts, paginate } = useContext(GlobalContext);


  //// SORTING ///
  //States
  const [sampleData, setSampleData] = useState( );
  const [originalState, setOrginalState] = useState(true);

  useEffect(() => {
    setSampleData(currentPosts);
  }, [currentPosts]);

  const handleSort = () => {

    if (originalState) {
      // console.log('handle sort works');
      const sortedData = [...sampleData].sort((a,b) => {
        return a.title > b.title ? 1 : -1
      });
      setSampleData(sortedData);
      setOrginalState(false);
    } else { 
      setSampleData(currentPosts);
      setOrginalState(true);
    };
  };



  return (


    <main className='h-[100%] w-screen bg-gradient-to-b  from-violet-500 to-fuchsia-500 ' >

        {/* NAVBAR */}
        <div className='flex flex-col h-[220px] mx-[100px] justify-end  items-center gap-6'>
            <h1 className='text-5xl font-[800] text-white '>
              NEWS NOW!
            </h1>  
            <SearchBar/>
            <button
              className='h-[35px] w-[200px] mb-[-0px] bg-blue-500 rounded-[50px] text-gray-100 font-[600]'
              onClick={handleSort}
            > 
              {originalState ? "Sort Alphabetically" : "Sort Date Published"}
            </button>
            {/* Sort State */}
            <p className='ml-[auto] text-white'>
              {originalState? "Sorted by - Date Published" : "Sorted by - Title Alphabetical Order" }
            </p>
        </div>
        {/* NEWS CARDS CONTAINER */}
        <div className='grid grid-cols-3 gap-6 mx-[100px]'>
          {sampleData && sampleData.map(news => 
            <NewsCard data={news} key={news.url}/>
          )};
          <Pagination postsPerPage={postsPerPage} totalPosts={totalposts} paginate={paginate}/>
        </div>

    </main>



  )
}

export default Layout