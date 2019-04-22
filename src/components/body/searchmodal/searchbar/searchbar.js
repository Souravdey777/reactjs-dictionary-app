import React from 'react';
import ClassNames from './searchbar.module.css';

const SearchBar = props =>
            <input className={ClassNames.Searchbar} type="text" placeholder="Enter the Word..." onKeyPress={props.searchBarOnKeyPressHandler} onChange={props.searchBarOnChangeHandler}/>

export default SearchBar;