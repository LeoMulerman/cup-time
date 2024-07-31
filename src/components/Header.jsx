import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a className="header__logo-link">
            <img className="header__logo" src="./image/logo.svg" alt="logo" />
          </a>

          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
                <a className="header__menu-link" href="#">
                  Чай
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="#">
                  {" "}
                  Кофе
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="#">
                  {" "}
                  Чайники
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="#">
                  Турки
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="#">
                  Прочее
                </a>
              </li>
            </ul>
          </nav>

          <a href="cart.html" className="header__cart-link">
            6
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
