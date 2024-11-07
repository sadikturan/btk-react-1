import { createContext, useReducer, useState } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  // add item to cart
  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }

  // delete cart item
  function deleteItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  // clear all items
  function clearAll() {
    dispatch({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    deleteItem,
    clearAll,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
