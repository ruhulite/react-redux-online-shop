import React from 'react';
import Products from './products';
import data from '../data/products.json';

const HomePage = (props) => {
  return (
    <div>
      <h2>Home page</h2>
      <Products products={data.products} />
    </div>
  );
};

export default HomePage;
