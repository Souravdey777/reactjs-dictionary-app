import React from 'react';
import ClassNames from './searchbutton.module.css';

const SearchButton = props =>
        <button className={ClassNames.Searchbutton} onClick={props.searchButtonOnClickedHandler}>Search</button>

export default SearchButton;