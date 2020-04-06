import React from 'react';
import data from '../data/products.json';
import Products from './products';

const HomePage = (props) => {
  return (
    <div>
      <h2>Home page</h2>
      <Products products={data.products} />
    </div>
  );
};

export default HomePage;
