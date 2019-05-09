import React, { Component } from 'react';
import ClassNames from './lexicalEntries.module.css';
import Entries from './entries/entries';

class LexicalEntries extends Component {
    render() {
        return (
            <div className={ClassNames.lexicalEntries}>
                {this.props.lexicalEntry.lexicalCategory?
                <div className={ClassNames.lexicalCategory}>
                    ({this.props.lexicalEntry.lexicalCategory.toLowerCase()})
                </div>:null}
                {this.props.lexicalEntry.entries?
                <div className={ClassNames.entries}>
                    {this.props.lexicalEntry.entries.map((entry, key) => <Entries entry={entry} key={key} />)}
                </div>:null}
            </div>
        );
    }
}

export default LexicalEntries;