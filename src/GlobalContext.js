import React, { createContext, useContext } from 'react'
import axios from 'axios';


// Create Context
const GlobalContext = createContext()

const GlobalProvider = () => {

    // State to save data after fetching
    const [data, setData] = useState();
    // Api Key 
    const apiKey = "dfcc844fab394ee09fbbe0ad122029c7"

  return (
    <div>GlobalContext</div>
  )
}

export default GlobalProvider