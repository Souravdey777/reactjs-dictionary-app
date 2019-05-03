import React, { Component } from 'react';
import Header from '../../components/header/header';
import Body from '../../components/body/body';
import axios from 'axios';

const appID = "0a9702f8";
const appKey = "6aa8c3e32e0da096e5b17a2126462889";
class DictionaryApp extends Component {

    state = {
        query: 'good',
        resultData: {},
        loaded: false
    }

    componentDidMount(){
        this.WordSearch();
    }


    WordSearch = () => {
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
                this.setState({resultData: response.data.results[0],loaded:true},()=>{
                    console.log(this.state.resultData);
                })
                
            }
        }).catch(error => {
            console.log(error)
        })
    }

    OnChangeHandler = (event) => {
        this.setState({ query: event.target.value }
            , () => {
                console.log(this.state.query)
            });
    }
    ButtonOnClickedHandler = () => {
        this.WordSearch();
    }
    OnKeyPressHandler =(event)=>{
        if (event.key === 'Enter') {
            this.WordSearch();
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Body
                    searchBarOnKeyPressHandler={this.OnKeyPressHandler}
                    searchBarOnChangeHandler={this.OnChangeHandler}
                    searchButtonOnClickedHandler={this.ButtonOnClickedHandler}
                    query={this.state.query}
                    resultData={this.state.resultData}
                    loaded={this.state.loaded}
                />
            </div>
        );
    }
}

export default DictionaryApp;
