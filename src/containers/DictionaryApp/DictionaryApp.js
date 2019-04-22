import React, { Component } from 'react';
import Header from '../../components/header/header';
import Body from '../../components/body/body';


class DictionaryApp extends Component {
    
    componentWillMount(){
        
          var Dictionary = require("oxford-dictionary-api");
  
          var app_id = "0a9702f8";
          var app_key = "6aa8c3e32e0da096e5b17a2126462889";
            
          var dict = new Dictionary(app_id,app_key);
        
          dict.find("ace",function(error,data){
            if(error) return console.log(error);
            console.log(data);
          });
    }


render() {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    );
}
}

export default DictionaryApp;
