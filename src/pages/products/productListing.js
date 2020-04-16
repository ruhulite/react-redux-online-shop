import React from 'react';
import AddButton from './addButton';
import RemoveButton from './removeButton';
import {Card, Col} from 'antd';
import Meta from 'antd/lib/card/Meta';
import Image from '../../assets/images/girl.png'

const ProductListing = (props) => {
  const product = props.products;

  //console.log('product.images ', product.images)

  return (
    
      <Col span={6}>
        <Card
          hoverable
          style={{width: 240}}
          cover={
            product.images
              ?  (
                  <img
                    alt={product.images[0].name}
                    //src={product.images[0].url}
                    src={Image}
                  />
                )
              : undefined
          }
        >
          <Meta title={product.name} description={product.short_description} />
          <div className="product-price"> Price:  ${product.price} </div>
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
