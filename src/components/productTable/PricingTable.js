import React, { Component } from 'react';
import ProductCategoryRow from 'components/productTable/ProductCategoryRow.js';
import ProductRow from 'components/productTable/ProductRow.js';

class PricingTable extends Component {
  getTableBody(data) {
    const rows = [];
    let lastCategory = null;

    data.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          name={product.name}
          price={product.price}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return <tbody>{rows}</tbody>;
  }

  getTableHead() {
    return (
      <thead>
        <tr>
          <th>Cake type</th>
          <th>Price</th>
        </tr>
      </thead>
    );
  }

  render() {
    const data = [
      { category: 'Cupcakes', price: '£', name: 'Box of 6' },
      { category: 'Cupcakes', price: '££', name: 'Box of 12' },
      { category: 'Celebration cake', price: '£', name: '7"' },
      { category: 'Celebration cake', price: '££', name: '12"' }
    ];

    return (
      <table>
        {this.getTableHead()}
        {this.getTableBody(data)}
      </table>
    );
  }
}

export default PricingTable;
