import React from 'react';

export default ({ link, text, className }) => (
  <a className={className} href={link}>{text}</a>
);
