import React from 'react';

export default ({ children, className }) => (
  <nav className={className}>
    <ul>{children}</ul>
  </nav>
);
