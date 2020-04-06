import React from 'react';
import {connect} from 'react-redux';

const sort = (items) => {
  return items.sort((a, b) => a.id < b.id)
}

const CartItems = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Item</th>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        {/* {sort(props.cart).map((item) => ( */}
        {props.cart.map((item) => (
          <tr>
            <td> {item.name} </td>
            <td> {item.quantity} </td>
            <td>
              {' '}
              <button onClick={() => props.addToCart(item)}>+</button>{' '}
              <button onClick={() => props.removeFromCart(item)}>-</button>{' '}
            </td>
            <td>
              {' '}
              <button onClick={() => props.removeAllFromCart(item)}>
                Remove all
              </button>{' '}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item});
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item});
    },
    removeAllFromCart: (item) => {
      dispatch({type: 'REMOVE_ALL', payload: item});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);