import React from 'react';
import data from '../data/products.json';
import Products from './products';

const HomePage = (props) => {
  return (
    <div>
      <h2>Home page</h2>
      <div className="container">
        <Products products={data.products} />
      </div>
    </div>
  );
};

export default HomePage;
