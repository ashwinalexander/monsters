import React from 'react';
import './search-box.styles.css';

//func component: no internal state or access to lifecycle methods
export const SearchBox = ({ placeholder, handleChange, className }) => (
  <input
    className={className}
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
