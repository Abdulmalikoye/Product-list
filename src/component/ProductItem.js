import React from "react";

function ProductItem({ product }) {
  return (
    <div>
      <React.Fragment>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        {product.available ? (
          <p>Status: In Stock</p>
        ) : (
          <p>Status: Out of Stock</p>
        )}
      </React.Fragment>
    </div>
  );
}

export default ProductItem;
