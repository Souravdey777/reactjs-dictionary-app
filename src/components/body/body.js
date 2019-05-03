import React, { Component } from 'react';
import ClassNames from './body.module.css';
import SearchModal from './searchmodal/searchmodal';
import WordContainer from './wordcontainer/wordcontainer';


class Body extends Component {
    render() {
        return (
            <div className={ClassNames.body}>
            <div className={ClassNames.results}>
            <WordContainer resultData={this.props.resultData}
            loaded={this.props.loaded}/>
            </div>
            <div>
            <SearchModal 
            searchBarOnKeyPressHandler={this.props.searchBarOnKeyPressHandler}
            searchBarOnChangeHandler={this.props.searchBarOnChangeHandler}
            searchButtonOnClickedHandler={this.props.searchButtonOnClickedHandler}
            query={this.props.query}/>
            </div>
            </div>
        );
    }
}

export default Body;
