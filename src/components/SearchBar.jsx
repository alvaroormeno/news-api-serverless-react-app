import React, { useState, useContext } from 'react'
import { GlobalContext } from '../GlobalContext'

const SearchBar = () => {

    const { getNewsArticles } = useContext(GlobalContext)

    const [topic, setTopic] = useState('')

    const handleSearchClick = (e) => {
        e.preventDefault();
        if(topic !== '') getNewsArticles(topic)
    }

  return (
    <div>

        <form action="" onSubmit={handleSearchClick}>
          <input 
            value={topic} 
            type="text" 
            placeholder='search news'
            onChange={(event) => setTopic(event.currentTarget.value) } />
          <button type='submit'>seearch!</button>
        </form>

    </div>
  )
}

export default SearchBar