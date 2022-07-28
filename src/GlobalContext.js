import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const { DateTime } = require("luxon");

// Create Context
const GlobalContext = createContext();
// Format date function called in newcard component
const formatTime = (time) =>
    DateTime.fromISO(time).toLocaleString(DateTime.DATETIME_FULL);




const GlobalProvider = (props) => {

    // Api Key
    const apiKey = "dfcc844fab394ee09fbbe0ad122029c7";

    // State - save search query
    const [query, setQuery] = useState("metaverse");  

    // State - save initial news article fetch
    const [newsArticles, setNewsArticles] = useState([]);

    /// SORTING ALGORYTHM ///
    // State - save articles for pagination when sorting
    const [paginationArticles, setPaginationArticles] = useState([]);
    // State - save sorting alphabetical or date published
    const [originalSortState, setOrginalSortState] = useState(true);
    // States - for pagination component
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);
    // Get current newsArticles
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const totalposts = paginationArticles.length;
    const currentNewsArticles = paginationArticles.slice(indexOfFirstPost, indexOfLastPost);
    // Function called in pagination component
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Sorting function
    const handleSort = () => {
        if (originalSortState) {
            const sortedData = [...newsArticles].sort((a, b) => {
                return a.title > b.title ? 1 : -1;
            });
            setPaginationArticles(sortedData);
            setOrginalSortState(false);
        } else {
            setPaginationArticles(newsArticles);
            setOrginalSortState(true);
        }
    };



    // GET - axios call to get all articles
    const getNewsArticles = async () => {
        try {
            const res = await axios.get(
                `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&language=en&apiKey=${apiKey}`
            );
            //console.log(res.data)

            setNewsArticles(res.data.articles);
            setPaginationArticles(res.data.articles);

            let time = res.data.articles.publishedAt;
        } catch (err) {
            console.error(err);
        }
    };
    // useEffect hook to call getNewsArticles every query status
    useEffect(() => {
        getNewsArticles();
        console.log("works");
    }, [query]);

    return (
        <GlobalContext.Provider
            value={{
                setQuery,
                currentNewsArticles,
                postsPerPage,
                totalposts,
                paginate,
                handleSort,
                originalSortState,
                currentPage,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, GlobalContext, formatTime };
