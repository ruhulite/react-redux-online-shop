import React from 'react';
import { Button } from 'antd';

const RemoveButton = (props) => {
  return (
    <Button type="primary" danger onClick={() => props.removeFromCart(props.cartItem)}>
     Remove
    </Button>
  );
};

export default RemoveButton;
