import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Order from "./Order";

const showOrder = (props) => {
  let summa = 0.0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      {/* Округление */}
      <p className="summa">Total: {new Intl.NumberFormat().format(summa)} $</p>
    </>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>You didn`t choose anything yet !</h2>
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">JDM Cars</span>
        <ul className="nav">
          <li>About</li>
          <li>Contacts</li>
          <li>Account</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrder(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
