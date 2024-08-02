import React from "react";
import Product from "./Product";
import { product } from "../product";

const Products = () => {
  return (
    <>
      <section className="products">
        <div className="container">
          <h2 className="products-title">Чай</h2>

          <ul className="products-list">
            {product.map((productItem) => {
              return (
                <Product
                  key={productItem.title}
                  image={productItem.image}
                  title={productItem.title}
                  price={productItem.price}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Products;
