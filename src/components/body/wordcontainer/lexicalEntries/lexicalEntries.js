import React, { Component } from 'react';
import Entries from './entries/entries';

class LexicalEntries extends Component {

    render() {
        return (
            <div >
                    {this.props.l.lexicalCategory}
                    {/* {this.props.l.entries.map(e=><Entries data={e}/>)} */}
            </div>
        );
    }
}

export default LexicalEntries;
