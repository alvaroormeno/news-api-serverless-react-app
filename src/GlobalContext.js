import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
const { DateTime } = require("luxon");


// Create Context
const GlobalContext = createContext()

const formatTime = (time) => DateTime.fromISO(time)
    

const GlobalProvider = (props) => {

    // State to save news data after fetching
    const [newsData, setNewsData] = useState();
    const [formatTime, setFormatTime] = useState();
    //console.log(newsData)
    // Api Key 
    const apiKey = "dfcc844fab394ee09fbbe0ad122029c7"
    
    
    // useEffect(() => {
    //     axios.get(
    //         `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=${apiKey}`
    //     ).then((response) => setNewsData(response.data)).catch((error) => console.log(error))
    // }, []);

    // GET - axios call to get all articles
    const getNewsArticles = async () => {
        try {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=${apiKey}`);
            //console.log(res.data)
            setNewsData(res.data.articles)
            //console.log(res.data.articles)

            let time = res.data.articles.publishedAt
            //console.log(time)

        } catch (err) {
            console.error(err);
        }
    };
    
    // useEffect hook to call getNewsArticles every reload
    useEffect(()=> {
        getNewsArticles();
        console.log("works")
    }, [])

  return (
    <GlobalContext.Provider value={{newsData}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider, GlobalContext, formatTime}