import React from "react"

const Delivery = () => (
  <section className="delivery">
    <div className="container">
      <h2 className="delivery__title">Доставка</h2>
      <form className="delivery__form">
        <input
          type="text"
          className="delivery__input"
          name="name"
          placeholder="Имя"
        />
        <input
          type="text"
          className="delivery__input"
          name="phone"
          placeholder="Телефон"
        />
        <input
          type="text"
          className="delivery__input delivery__input-address"
          name="address"
          placeholder="Адрес"
        />
        <fieldset className="delivery__payment">
          <h3 className="delivery__payment-title">Оплата:</h3>
          <label className="delivery__payment-label">
            <input
              type="radio"
              className="delivery__radio"
              value="card"
              name="payment"
            />
            Картой
          </label>

          <label className="delivery__payment-label">
            <input
              type="radio"
              className="delivery__radio"
              value="cash"
              name="payment"
              defaultChecked
            />
            Наличные
          </label>
        </fieldset>
      </form>
    </div>
  </section>
)

export default Delivery
