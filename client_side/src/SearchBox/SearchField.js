import React from 'react'

const SearchField = ({handleChange}) => {
    return (
        <div>
            <input
                style={{display: 'flex', margin: `${2}rem auto`, width:`${30}%`, padding: 10, borderRadius: 10, border: `${1}px solid gray`, opacity: 0.6, outline: 'none'}}
                type="search"
                name='search'
                onChange={handleChange}
             />
        </div>
    )
}

export default SearchField
