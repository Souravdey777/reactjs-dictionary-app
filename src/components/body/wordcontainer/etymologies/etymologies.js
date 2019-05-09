import React from 'react';

const Etymologies = props =>

<p><span>Origin:</span>&nbsp;{props.entry.etymologies.map(etymology=>etymology)}</p>

export default Etymologies;
