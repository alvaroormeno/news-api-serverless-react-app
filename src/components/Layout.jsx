import React, { useContext, useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { GlobalContext } from '../GlobalContext'
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const Layout = (props) => {

  // Values from GlobalContext
  const { currentPosts, postsPerPage , totalposts, paginate, handleSort, newsData, originalSortState, currentPage } = useContext(GlobalContext);
  //console.log(paginate)

  // //// SORTING ///
  // //States
  // const [newsData, setNewsData] = useState();
  // const [originalSortState, setOrginalSortState] = useState(true);

  // // Called every time pagination grabs current posts, sorts depending on originalSortState
  // useEffect(() => {
  //   if(!originalSortState) {
  //     const sortedData = [...currentPosts].sort((a,b) => {
  //       return a.title > b.title ? 1 : -1
  //     });
  //     setNewsData(sortedData);
  //   } else {
  //     setNewsData(currentPosts);
  //   }
  // }, [currentPosts]);
  // // Sorting based on Sorting Button
  // const handleSort = () => {
  //   if (originalSortState) {
  //     // console.log('handle sort works');
  //     const sortedData = [...currentPosts].sort((a,b) => {
  //       return a.title > b.title ? 1 : -1
  //     });
  //     setNewsData(sortedData);
  //     setOrginalSortState(false);
  //   } else { 
  //     setNewsData(currentPosts);
  //     setOrginalSortState(true);
  //   };
  // };

  return (

    <main className='h-[100%] w-screen bg-gradient-to-b  from-violet-500 to-fuchsia-500'>
        {/*/// NAVBAR ///*/}
        <div className='flex flex-col h-[280px] mx-[100px] justify-end  items-center gap-6'>
            {/* Title */}
            <h1 className='text-5xl font-[800] text-white '>
              NEWS NOW!
            </h1>
            {/* Search Bar Component */}
            <SearchBar/>
            {/* Sorting Button */}
            <button
              className='h-[35px] w-[200px] mb-[-0px] bg-blue-500 rounded-[50px] text-gray-100 font-[600] tracking-[1px]'
              onClick={handleSort}
            > 
              {originalSortState ? "Sort Title A-Z" : "Sort Date Published"}
            </button>
            {/* Pagination Component */}
            <Pagination className="" postsPerPage={postsPerPage} totalPosts={totalposts} paginate={paginate}/>

            <div className='flex flex-row w-[100%] justify-between'>
              {/* Sort State */}
              <p className='mt-[-20px] text-white tracking-[.5px] font-[600]'>
                {originalSortState ? "Sorted by - Date Published" : "Sorted by - Title Alphabetical Order" }
              </p>
              {/* Sort State */}
              <p className='mt-[-20px] text-white tracking-[.5px] font-[600]'>
                {`Page - ${currentPage}`}
              </p>
            </div>
            
            
        </div>
        {/*/// NEWS CARDS CONTAINER ///*/}
        <div className='grid grid-cols-3 gap-6 mx-[100px]'>
          {/* Map newscard for each news object */}
          {currentPosts && currentPosts.map(news => 
            <NewsCard data={news} key={news.url}/>
          )}
        </div>
        {/*/// PAGINATION CONTAINER ///*/}
        <div className='py-[40px]'>
          <Pagination postsPerPage={postsPerPage} totalPosts={totalposts} paginate={paginate}/>
        </div>
    </main>

  );
};

export default Layout;