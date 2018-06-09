import React from 'react';

export default ({ category }) => (
  <tr className="category">
    <th colSpan="2">
      {category}
    </th>
  </tr>
);
