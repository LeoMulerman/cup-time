import React from "react";

const Product = ({ image, title, price }) => (
  <li className="products-item">
    <article className="product">
      <img src={image} alt="Кокосовая матча" className="product-image" />
      <div className="product__content">
        <h3 className="product__title">{title}</h3>
        <p className="product__price">{`${price} руб`}</p>
      </div>
    </article>
  </li>
);

export default Product;
