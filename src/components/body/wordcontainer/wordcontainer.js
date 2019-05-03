import React, { Component } from 'react';
import ClassNames from './wordcontainer.module.css';
import LexicalEntries from './lexicalEntries/lexicalEntries';

class WordContainer extends Component {
    componentDidMount(){
        console.log(this.props.resultData)
    }
    render() {
        return (
            <div className={ClassNames.WordContainer}>
{this.props.loaded?
                <div className={ClassNames.content}>

                    <div className={ClassNames.Word}>
                        {this.props.resultData.word}
                    </div>
                
                <div className={ClassNames.line} />
                <div className={ClassNames.meaning}>
                    {this.props.resultData.lexicalEntries.map((e)=><LexicalEntries l={e} key={e.lexicalCategory}/>)}
                </div>
                </div>:null}


            </div>
        );
    }
}

export default WordContainer;
