import React from 'react';
import ProductListing from './productListing';
import { connect } from 'react-redux';
import { cartItemWithQuantities } from '../../features/cart';

const Products = (props) => {
  return (
    <div>
      {props.products.map((product, index) => (
        <ProductListing 
          key={index} products={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />
      ))}
    </div>
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