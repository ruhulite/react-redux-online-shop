import React from 'react';
import {connect} from 'react-redux';
import { Table, Tag } from 'antd';
import { NavLink } from 'react-router-dom';

const sort = (items) => {
  return items.sort((a, b) => a.id < b.id);
};

const CartItems = (props) => {
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
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, item) => <NavLink to={item.permalink}>{name}</NavLink>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Unit Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];


  return (
    <>
    {props.cart.length > 0 ? (
    <Table pagination={false} columns={columns} dataSource={props.cart} />
    ) : (
      <div className="cart-has-no-item">You have no item in your Cart.</div>
    )} 
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
