import React from 'react';
import ProductListing from './productListing';

const Products = (props) => {
  return (
    <div>
      {props.products.map((product, index) => (
        <ProductListing key={index} products={product} />
      ))}
    </div>
  );
};

export default Products;
