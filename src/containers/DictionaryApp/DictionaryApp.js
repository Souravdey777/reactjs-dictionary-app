import React, { Component } from 'react';
import Header from '../../components/header/header';
import Body from '../../components/body/body';
import axios from 'axios';
import ClassNames from './DictionaryApp.module.css'

const appID = "0a9702f8";
const appKey = "6aa8c3e32e0da096e5b17a2126462889";
class DictionaryApp extends Component {

    state = {
        query: '',
        resultData: {},
        loading: false
    }

    WordSearch = () => {
        this.setState({ loading: false })
        axios.get(`https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${this.state.query}`, {
            headers: {
                Accept: "application/json",
                app_id: appID,
                app_key: appKey
            }
        }).then(response => {
            if (response.status >= 400) {
                console.log("error");
            }
            else {
                console.log(response);
                this.setState({ resultData: response.data.results[0], loading: true }, () => {
                    console.log(this.state.resultData);
                })

            }
        }).catch(error => {
            console.log(error)
        })
    }

    OnChangeHandler = (event) => {
        this.setState({ query: event.target.value });
    }
    ButtonOnClickedHandler = () => {
        this.WordSearch();
    }
    OnKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            this.WordSearch();
        }
    }

    render() {
        return (
            <div className={ClassNames.DictionaryApp}>
                <Header />
                <Body
                    searchBarOnKeyPressHandler={this.OnKeyPressHandler}
                    searchBarOnChangeHandler={this.OnChangeHandler}
                    searchButtonOnClickedHandler={this.ButtonOnClickedHandler}
                    query={this.state.query}
                    resultData={this.state.resultData}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}

export default DictionaryApp;
