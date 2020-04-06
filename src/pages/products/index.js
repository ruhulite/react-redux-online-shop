import React from 'react';
import { connect } from 'react-redux';
import ProductListing from './productListing';
import { Row } from 'antd';

const Products = (props) => {
  return (
    <Row>
      {props.products.map((product, index) => (
        <ProductListing 
          key={index} products={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />
      ))}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)