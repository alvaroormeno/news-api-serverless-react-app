import React, { useState } from 'react'

const SearchBar = () => {

    const [topic, setTopic] = useState('')

    const handleSearchClick = () => {
        
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