import React from 'react';
import './search-box.styles.css';



//func component: no internal state or access to lifecycle methods
export const SearchBox = ({placeholder, handleChange}) => (

    <input className='search'
          type='search'
        placeholder={placeholder}
        onChange= {handleChange} />

)


