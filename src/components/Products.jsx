import React from "react";
import Product from "./Product";

const product = [
  {
    image: "./image/photo-2.jpg",
    title: "Кокосовая матча",
    price: 390,
  },
  {
    image: "./image/photo-1.jpg",
    title: "Зеленый индонезийский чай",
    price: 390,
  },
  {
    image: "./image/photo-3.jpg",
    title: "Черный чай из Эфиопии",
    price: 380,
  },
  {
    image: "./image/photo-5.jpg",
    title: "Черный чай из Калифорнии",
    price: 360,
  },
  {
    image: "./image/photo-4.jpg",
    title: "Органическая веганская матча",
    price: 400,
  },
  {
    image: "./image/photo.jpg",
    title: "Чай черный Лакандона",
    price: 390,
  },
];

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
