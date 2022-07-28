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

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    //console.log(currentPage)
    const [postsPerPage] = useState(15);

    // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  console.log(indexOfLastPost)
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalposts = posts.length

  const paginate = (pageNumber ) => setCurrentPage(pageNumber);

    //// SORTING ///
  //States
  const [newsData, setNewsData] = useState();
  const [originalSortState, setOrginalSortState] = useState(true);

  // Called every time pagination grabs current posts, sorts depending on originalSortState
//   useEffect(() => {
//     if(!originalSortState) {
//       const sortedData = [...posts].sort((a,b) => {
//         return a.title > b.title ? 1 : -1
//       });
//       setNewsData(sortedData);
//     } else {
//       setNewsData(currentPosts);
//     }
//   }, [posts, currentPage]);
  // Sorting based on Sorting Button
  const handleSort = () => {
    if (originalSortState) {
      // console.log('handle sort works');
      const sortedData = [...currentPosts].sort((a,b) => {
        return a.title > b.title ? 1 : -1
      });
      setNewsData(sortedData);
      setOrginalSortState(false);
    } else { 
      setNewsData(currentPosts);
      setOrginalSortState(true);
    };
  };
  

  
    
    // GET - axios call to get all articles
    const getNewsArticles = async () => {
        try {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=${apiKey}`);
            //console.log(res.data)
            
            setPosts(res.data.articles);
        

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
    <GlobalContext.Provider value={{ setQuery, currentPosts, postsPerPage , totalposts, paginate, handleSort, newsData, originalSortState}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider, GlobalContext, formatTime}