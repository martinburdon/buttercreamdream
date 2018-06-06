import React from 'react';

export default (props) => (
  <gallery-item>
    <img src={props.thumb} alt={props.altText} />
    {/*<div className="title-container">
      <span>{props.title}</span>
    </div>*/}
  </gallery-item>
);
