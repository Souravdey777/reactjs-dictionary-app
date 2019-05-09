import React from 'react';
import Definations from './definations/definations';
import Examples from './examples/examples';

const Senses = props =>

    <div>
        {props.sense.definitions?props.sense.definitions.map((definition,key)=><Definations key={key} definition={definition}/>):null}
        {props.sense.examples?
        <ul>
            <u>Examples:</u>
        {props.sense.examples.map((example,key)=><li key={key}><Examples example={example}/></li>)}
        </ul>:null}
        
    </div>

export default Senses;
