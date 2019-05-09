import React, { Component } from 'react';
import ClassNames from './wordcontainer.module.css';
import LexicalEntries from './lexicalEntries/lexicalEntries';
import Etymologies from './etymologies/etymologies';

class WordContainer extends Component {


    componentDidMount() {
        console.log(this.props.loaded ? this.props.resultData.lexicalEntries[0].pronunciations[0].audioFile : null)
    }
    render() {
        let NoResult = (<div className={ClassNames.content}>
            <div className={ClassNames.NoWord}>
            </div>
            <div className={ClassNames.line} />
            <div className={ClassNames.NoMeaning}>
                <h2>Loading...</h2>
            </div>
        </div>);

        return (

            <div className={ClassNames.WordContainer}>
                {this.props.query === '' && !this.props.loading ? null : (this.props.loading ?
                    <div className={ClassNames.content}>
                        <div className={ClassNames.Word}>
                            {this.props.resultData.word.charAt(0).toUpperCase() + this.props.resultData.word.slice(1)}
                        </div>
                        <div className={ClassNames.line} />
                        <div className={ClassNames.meaning}>
                            {this.props.resultData.lexicalEntries.map((lexicalEntry, key) =>
                                <div key={key}>
                                    <LexicalEntries lexicalEntry={lexicalEntry} />
                                    <div className={ClassNames.line} />
                                </div>)}
                            <div className={ClassNames.etymology} >
                            
                                {this.props.resultData.lexicalEntries.map((lexicalEntry, key) => <div key={key}>
                                    {lexicalEntry.entries.map((entry, key) =>
                                        entry.etymologies ? <Etymologies entry={entry} key={key} />: null)}
                                </div>)}
                            </div>
                        </div>
                    </div>
                    : NoResult)}
            </div>
        );
    }
}

export default WordContainer;
