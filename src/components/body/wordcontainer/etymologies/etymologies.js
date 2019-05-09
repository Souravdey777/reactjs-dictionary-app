import React from 'react';

const Etymologies = props =>

<p><span>Origin:</span><br/>{props.entry.etymologies.map(etymology=>etymology)}</p>

export default Etymologies;
