import React from 'react';
import ClassNames from './body.module.css';
import SearchModal from './searchmodal/searchmodal';
import WordContainer from './wordcontainer/wordcontainer';


const Body = props => {
    return(
    <div className={ClassNames.body}>
        <div className={ClassNames.results}>
            <WordContainer resultData={props.resultData}
                loading={props.loading}
                query={props.query} />
        </div>
        <div>
            <SearchModal
                searchBarOnKeyPressHandler={props.searchBarOnKeyPressHandler}
                searchBarOnChangeHandler={props.searchBarOnChangeHandler}
                searchButtonOnClickedHandler={props.searchButtonOnClickedHandler}
                query={props.query} />
        </div>
    </div>
)}

export default Body;
