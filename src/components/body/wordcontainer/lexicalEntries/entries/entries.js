import React from 'react';
import ClassNames from './entries.module.css'
import Senses from './senses/senses';

const Entries = props =>

    <div>
        {props.entry.grammaticalFeatures?
        <div className={ClassNames.grammaticalFeatures}>
            <u>Grammatical Features:</u>
            <br />
            {props.entry.grammaticalFeatures.map((grammaticalFeature, key) => <span key={key}>{grammaticalFeature.text.toLowerCase()}&nbsp;{grammaticalFeature.type.toLowerCase()}<br /></span>)}
        </div>:null}
        {props.entry.senses?<div className={ClassNames.senses}>
            <u>Defination:</u>
            <br />
            {props.entry.senses.map((sense, key) => <Senses sense={sense} key={key} />)}
        </div>:null}
    </div>

export default Entries;
