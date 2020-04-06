import React from 'react';
import AddButton from './addButton';
import RemoveButton from './removeButton';
import {Row, Card, Col} from 'antd';
import Meta from 'antd/lib/card/Meta';

const ProductListing = (props) => {
  const product = props.products;

  return (
    
      <Col span={6}>
        <Card
          hoverable
          style={{width: 240}}
          cover={
            product.images
              ? product.images.map((image, index) => (
                  <img
                    key={index}
                    alt={image.name}
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                ))
              : undefined
          }
        >
          <Meta title={product.name} description={product.description} />
          <div className="product-price"> ${product.price} </div>
          <div className="btn button">
            <AddButton
              cartItem={props.cartItem}
              products={props.products}
              addToCart={props.addToCart}
            />
            {props.cartItem ? (
              <RemoveButton
                cartItem={props.cartItem}
                removeFromCart={props.removeFromCart}
              />
            ) : null}
          </div>
        </Card>
      </Col>
    
  );
};

export default ProductListing;
