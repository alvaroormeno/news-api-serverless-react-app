import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';


// Create Context
const GlobalContext = createContext()

const GlobalProvider = () => {

    // State to save news data after fetching
    const [newsData, setNewsData] = useState();
    // Api Key 
    const apiKey = "dfcc844fab394ee09fbbe0ad122029c7"
    // useEffect hook to call api every reload
    useEffect(() => {axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(res => setNewsData(res.data))
        .catch(err => console.log(err))
    }, []);

  return (
    <GlobalContext.Provider value={{newsData}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider, GlobalContext}