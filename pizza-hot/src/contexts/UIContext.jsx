import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIContextProvider({ children }) {
  const [uiProgress, setUIProgress] = useState("");

  function showCart() {
    setUIProgress("cart");
  }

  function hideCart() {
    setUIProgress("");
  }

  function showCheckout() {
    setUIProgress("checkout");
  }

  function hideCheckout() {
    setUIProgress("");
  }

  const uiProgressContext = {
    uiProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UIContext.Provider value={uiProgressContext}>
      {children}
    </UIContext.Provider>
  );
}
