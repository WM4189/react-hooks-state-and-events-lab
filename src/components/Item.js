import React, { useState } from "react";

function Item({ name, category }) {
  const [cart,setCart] = useState("")
  const cartStatus = cart ? "in-cart" : ""
  const addRemove = cart ? "Remove From Cart" : "Add to Cart"
  const colorToggle = cart ? "remove" : "add"
  function addCart(){
    setCart(cart => !cart)
  }
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={colorToggle} onClick={addCart}>{addRemove}</button>
    </li>
  );
}

export default Item;
