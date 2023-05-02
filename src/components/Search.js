import React from 'react'
import {MdSearch} from 'react-icons/md'
function Search(props) {
    const handleSearch=(e)=>{
        props.setsearch(e.target.value)
    }
  return (
    <div className='search'>
        <MdSearch size="1.3em" className='search-icon' />
      <input type="search"  placeholder='search' onChange={handleSearch} />
    </div>
  )
}

export default Search
