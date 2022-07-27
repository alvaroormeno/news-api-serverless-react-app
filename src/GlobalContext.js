import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


// Create Context
const GlobalContext = createContext()

const GlobalProvider = (props) => {

    // State to save news data after fetching
    const [newsData, setNewsData] = useState();
    //console.log(newsData)
    // Api Key 
    const apiKey = "dfcc844fab394ee09fbbe0ad122029c7"
    
    


    // GET - axios call to get all articles
    const getNewsArticles = async () => {
        try {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
            //console.log(res.data)
            setNewsData(res.data)
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

export {GlobalProvider, GlobalContext}