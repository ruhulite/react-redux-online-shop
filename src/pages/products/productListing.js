import React from 'react';

const ProductListing = (props) => {

  //console.log('props ', props.products);
  const data = props.products;

  return (
    <div className="product-details">
      {data.images
        ? data.images.map((image, index) => <img key={index} src="/" alt={image.name} />)
        : undefined}
      <h3 className="product-title"> {data.name} </h3>
      <div className="product-price"> ${data.price} </div>
      <div className="product-description"> {data.description} </div>
      <div className="btn button">
        {' '}
        <button>Add to Cart</button>{' '}
      </div>
    </div>
  );
};

export default ProductListing;
