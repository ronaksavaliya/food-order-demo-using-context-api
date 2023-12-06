import { React, useReducer } from "react";
import cartContext from "./Cart_Context";
import cartReducer from "./Cart_Reducer";

export default function CartProvider({ children }) {
  const initialState = {
    items: {},
    totalItems: 0,
    cartPrice: 0,
  };
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={{ cartState, dispatchCartAction }}>
      {children}
    </cartContext.Provider>
  );
}
