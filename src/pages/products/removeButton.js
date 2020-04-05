import React from 'react';

const RemoveButton = (props) => {
  return (
    <button onClick={() => props.removeFromCart(props.cartItem)}>
     Remove
    </button>
  );
};

export default RemoveButton;
