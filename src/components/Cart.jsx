import React from "react";
import CartItem from "./CartItem";
import { product } from "../product";

const Cart = () => (
  <section className="cart">
    <div className="container cart__container">
      <h2 className="cart__titile">Корзина (6)</h2>
      <ul className="cart__items">
        {product.map((productItem) => {
          return (
            <CartItem
              key={productItem.title}
              image={productItem.image}
              title={productItem.title}
              price={productItem.price}
            />
          );
        })}
      </ul>
      <div className="cart__summary">
        <h3 className="cart__summary-title">Итого:</h3>
        <p className="cart__total">2200&nbsp;₽</p>
        <button className="cart__order-button">Заказать</button>
      </div>
    </div>
  </section>
);

export default Cart;
