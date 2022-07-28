import React, { useContext } from 'react'
import NewsCard from './NewsCard'
import { GlobalContext } from '../GlobalContext'
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const Layout = (props) => {

  // Values from GlobalContext
  const { currentNewsArticles, postsPerPage , totalposts, paginate, handleSort, originalSortState, currentPage } = useContext(GlobalContext);

  return (

    <main className='h-[100%] w-screen bg-gradient-to-b  from-violet-500 to-fuchsia-500'>
        {/*/// NAVBAR ///*/}
        <div className='flex flex-col h-[280px] sm:mx-[20px] md:mx-[100px] justify-end  items-center gap-6'>
            {/* Title */}
            <h1 className='sm:text-3xl md:text-5xl font-[800] text-white '>
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
            {/* Sort by & Current Page Container */}
            <div className='flex flex-row w-[100%] justify-between'>
              {/* Sort State */}
              <p className='mt-[-20px] text-white tracking-[.5px] font-[600]'>
                {originalSortState ? "Sorted by - Date Published" : "Sorted by - Title Alphabetical Order" }
              </p>
              {/* Current Page */}
              <p className='mt-[-20px] text-white tracking-[.5px] font-[600]'>
                {`Page - ${currentPage}`}
              </p>
            </div>
        </div>
        {/*/// NEWS CARDS CONTAINER ///*/}
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:mx-[20px] md:mx-[100px]'>
          {/* Map newscard for each news object */}
          {currentNewsArticles && currentNewsArticles.map(news => 
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