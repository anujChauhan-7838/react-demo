import React from 'react';
import './search.css'


function SearchInput(props){
    console.log(props)
    return (
     <input
     className="search"
     type="text"
     onChange={props.handleSearch}
     />
    )
}

export default SearchInput;