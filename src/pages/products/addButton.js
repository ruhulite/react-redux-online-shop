import React from 'react';
import { Button } from 'antd';

const AddButton = (props) => {
  return (
    <Button type="primary" onClick={() => props.addToCart(props.products)}>
      Add to Cart ({(props.cartItem && props.cartItem.quantity) || 0}){' '}
    </Button>
  );
};

export default AddButton;
