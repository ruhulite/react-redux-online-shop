import React from 'react';

const AddButton = (props) => {
  return (
    <button onClick={() => props.addToCart(props.products)}>
      Add to Cart ({(props.cartItem && props.cartItem.quantity) || 0}){' '}
    </button>
  );
};

export default AddButton;
