import React, { useContext } from "react";
import "./MealIteam.css";
import { Button } from "@mui/material";
import cartContext from "../../../Store/Cart_Context";
import { addToCart, removeFromCart } from "../../../Store/Cart_Actions";

export default function MealIteam({ meal }) {
  const { cartState, dispatchCartAction } = useContext(cartContext);

  const quantity = cartState.items[meal.id]
    ? cartState.items[meal.id].quantity
    : 0;

  const increaseQuantity = () => {
    dispatchCartAction(addToCart(meal));
  };

  const decreaseQuantity = () => {
    dispatchCartAction(removeFromCart(meal));
  };

  return (
    <div className="mealIteam_container">
      <div className="mealIteam_details">
        <p>{meal.name}</p>
        <p>${meal.price}</p>
      </div>
      <div className="mealIteam_add">
        {quantity > 0 && (
          <>
            <Button onClick={decreaseQuantity}>-</Button>
            <span>{quantity}</span>
            <Button onClick={increaseQuantity}>+</Button>
          </>
        )}
        {quantity === 0 && (
          <Button
            onClick={increaseQuantity}
            variant="contained"
            sx={{ backgroundColor: "gray" }}
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
}
