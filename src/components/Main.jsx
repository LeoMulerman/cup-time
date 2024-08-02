import React from "react";
import Promo from "./Promo";
import Products from "./Products";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Delivery from "./Delivery";

const Main = () => {
  return (
    <>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Promo />
                <Products />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Cart />
                <Delivery />
              </>
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
};

export default Main;
