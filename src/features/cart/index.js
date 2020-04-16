import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'antd';
import {NavLink} from 'react-router-dom';
import Image from '../../assets/images/girl.png';

const sort = (items) => {
  return items.sort((a, b) => a.id < b.id);
};

const CartItems = (props) => {
  const {cart} = props;

  const subtotal = cart
    ? cart.reduce(
        (state, cartItem) => state + cartItem.quantity * cartItem.price,
        0
      )
    : undefined;

  const handleClick = (item) => {
    if (item && parseInt(item.quantity) < 5) {
      props.addToCart(item);
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      className: 'cart-product-image-thumb',
      render: (image, item) => (
        <NavLink to={item.permalink}>
          <img alt={image} src={Image} />
        </NavLink>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, item) => (
        <h3>
          <NavLink to={item.permalink}>{name}</NavLink>
        </h3>
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, item) => (
        <div>
          <span>{quantity}</span>
          <button onClick={() => handleClick(item)}>+</button>{' '}
          <button onClick={() => props.removeFromCart(item)}>-</button>{' '}
        </div>
      ),
    },
    {
      title: 'Unit Price',
      dataIndex: 'price',
      key: 'price',
      render: (price, item) => (
        <p>
          {item.quantity} * ${price}
        </p>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price, item) => <p>${item.quantity * price}</p>,
    },
  ];

  return (
    <>
      {props.cart.length > 0 ? (
        <Table pagination={false} columns={columns} dataSource={props.cart} />
      ) : (
        <div className="cart-has-no-item">You have no item in your Cart.</div>
      )}

      <div>
        <h3 className="align-right">Subtotal: {subtotal}</h3>
      </div>
      {/* {props.cart.length > 0 ? (
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
            {sort(props.cart).map((item, index) => (
              <tr key={index}>
                <td> {item.name} </td>
                <td> {item.quantity} </td>
                <td>
                  {' '}
                  <button onClick={() => handleClick(item)}>+</button>{' '}
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
      ) : (
        <div className="cart-has-no-item">You have no item in your Cart.</div>
      )} 
    */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
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
