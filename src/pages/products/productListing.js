import React from 'react';
import AddButton from './addButton';
import RemoveButton from './removeButton';

const ProductListing = (props) => {
  const product = props.products;

  return (
    <div className="product-details">
      {product.images
        ? product.images.map((image, index) => (
            <img key={index} src="/" alt={image.name} />
          ))
        : undefined}
      <h3 className="product-title"> {product.name} </h3>
      <div className="product-price"> ${product.price} </div>
      <div className="product-description"> {product.description} </div>
      <div className="btn button">
        <AddButton
          cartItem={props.cartItem}
          products={props.products}
          addToCart={props.addToCart}
        />
        {
          props.cartItem ? (
            <RemoveButton
          cartItem={props.cartItem}
          removeFromCart={props.removeFromCart}
        />
          ): null
        }
        
      </div>
    </div>
  );
};

export default ProductListing;
