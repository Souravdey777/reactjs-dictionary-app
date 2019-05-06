import React, { Component } from 'react';

class LexicalEntries extends Component {
    render() {
        return (
            <div >
                    <h3>{this.props.l.lexicalCategory}</h3>
                    {/* {this.props.l.entries.map(e=>e.homographNumber)}<br/> */}
                    <ul>{this.props.l.entries.map(e=>e.senses.map((sense,key)=><li key={key}>{sense.definitions[0]}</li>))}</ul>
            </div>
        );
    }
}

export default LexicalEntries;