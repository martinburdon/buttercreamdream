import React from 'react';

export default (props) => (
  <div>
    <img src={props.thumb} alt={props.altText} />
    <span>{props.title}</span>
  </div>
);
