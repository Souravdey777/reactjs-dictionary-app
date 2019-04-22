import React, { Component } from 'react';
import ClassNames from './searchmodal.module.css';
import SearchBar from './searchbar/searchbar';
import SearchButton from './searchbutton/searchbutton';

class SearchModal extends Component {
    render() {
        return (
            <div className={ClassNames.SearchModal}>
                <p>SEARCH
                    <br/>FOR
                    <br/>THE
                    <br/>WORD
                </p>
                <SearchBar
                    searchBarOnKeyPressHandler={this.props.searchBarOnKeyPressHandler}
                    searchBarOnChangeHandler={this.props.searchBarOnChangeHandler}
                />
                <SearchButton searchButtonOnClickedHandler={this.props.searchButtonOnClickedHandler} />
            </div>
        );
    }
}

export default SearchModal;
