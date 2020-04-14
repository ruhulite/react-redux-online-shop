import React from 'react';
import CartItems from '../features/cart';

const Cart = () => {
  return (
    <div>
      
      <div className="container">
      <h2>Cart</h2>
      <CartItems />
      </div>
    </div>
  );
};

export default Cart