import React from "react";

const CartItem = ({ image, title, price }) => (
  <li className="cart__item">
    <img src={image} alt="Кокосовая матча" className="cartItem-image" />

    <div className="cartItem__content">
      <h3 className="cartItem__title">{title}</h3>
      <div className="cartItem__quantity">
        <button className="cartItem__quantity-button cartItem__quantity-minus"></button>
        <input type="number" className="cartItem__quantity-input" value={3} />
        <button className="cartItem__quantity-button cartItem__quantity-plus"></button>
      </div>
      <p className="cartItem__price">{`${price} руб`}</p>
    </div>
  </li>
);

export default CartItem;
