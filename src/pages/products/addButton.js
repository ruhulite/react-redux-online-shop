import React from 'react';
import {Button} from 'antd';

const AddButton = (props) => {
  const handleClick = (props) => {
    if (
      (props && props.cartItem === undefined) ||
      (props.cartItem && parseInt(props.cartItem.quantity)) < 5
    ) {
      props.addToCart(props.products);
    }
  };

  return (
    <Button type="primary" onClick={() => handleClick(props)}>
      Add to Cart ({(props.cartItem && props.cartItem.quantity) || 0}){' '}
    </Button>
  );
};

export default AddButton;
