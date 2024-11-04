import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  // add item to cart
  function addItem() {}

  // update cart items
  function updateItem() {}

  // delete cart item
  function deleteItem() {}

  // clear all items
  function clearAll() {}

  return (
    <CartContext.Provider
      value={{ items, addItem, updateItem, deleteItem, clearAll }}
    >
      {children}
    </CartContext.Provider>
  );
}
