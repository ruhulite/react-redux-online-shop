import React from 'react';
import { connect } from 'react-redux';


const Checkout = (props) => {
  return (
    <div>
      <Checkout />
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)