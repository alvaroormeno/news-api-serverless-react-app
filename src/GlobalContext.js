import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
const { DateTime } = require("luxon");


// Create Context
const GlobalContext = createContext()

const formatTime = (time) => DateTime.fromISO(time).toLocaleString(DateTime.DATETIME_FULL)



const GlobalProvider = (props) => {

    // State to save news data after fetching
    
    //console.log(newsData)

    const [query, setQuery] = useState('bitcoin')

    // Api Key 
    const apiKey = "dfcc844fab394ee09fbbe0ad122029c7"

    const [newsArticles, setNewsArticles] = useState([]);
    const [paginationArticles, setPaginationArticles] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    //console.log(currentPage)
    const [postsPerPage] = useState(15);

    // Get current newsArticles
  const indexOfLastPost = currentPage * postsPerPage;
  console.log(indexOfLastPost)
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = paginationArticles.slice(indexOfFirstPost, indexOfLastPost);
  const totalposts = paginationArticles.length

  const paginate = (pageNumber ) => setCurrentPage(pageNumber);

    //// SORTING ///
  //States
  const [newsData, setNewsData] = useState();
  const [originalSortState, setOrginalSortState] = useState(true);

  // Called every time pagination grabs current newsArticles, sorts depending on originalSortState
//   useEffect(() => {
//     if(!originalSortState) {
//       const sortedData = [...newsArticles].sort((a,b) => {
//         return a.title > b.title ? 1 : -1
//       });
//       setNewsData(sortedData);
//     } else {
//       setNewsData(currentPosts);
//     }
//   }, [newsArticles, currentPage]);
  // Sorting based on Sorting Button
  const handleSort = () => {
    if (originalSortState) {
      // console.log('handle sort works');
      const sortedData = [...newsArticles].sort((a,b) => {
        return a.title > b.title ? 1 : -1
      });
      setPaginationArticles(sortedData);
      setOrginalSortState(false);
    } else { 
        setPaginationArticles(newsArticles);
      setOrginalSortState(true);
    };
  };
  

  
    
    // GET - axios call to get all articles
    const getNewsArticles = async () => {
        try {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=${apiKey}`);
            //console.log(res.data)
            
            setNewsArticles(res.data.articles);
            setPaginationArticles(res.data.articles);
        

            let time = res.data.articles.publishedAt
           

        } catch (err) {
            console.error(err);
        }
    };
    
    // useEffect hook to call getNewsArticles every reload
    useEffect(()=> {
        getNewsArticles();
        console.log("works")
    }, [query])

    

  return (
    <GlobalContext.Provider value={{ setQuery, currentPosts, postsPerPage , totalposts, paginate, handleSort, newsData, originalSortState, currentPage}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider, GlobalContext, formatTime}