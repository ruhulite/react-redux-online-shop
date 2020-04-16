import React from 'react';
import data from '../data/products.json';
import Products from './products';

const HomePage = (props) => {
  return (
    <div>
      <div className="container">
        <h2>Home</h2>
        <Products products={data.products} />
      </div>
    </div>
  );
};

export default HomePage;
