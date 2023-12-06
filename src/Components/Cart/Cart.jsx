import React, { useContext, useState } from "react";
import cartContext from "../../Store/Cart_Context";
import "./Cart.css";
import MealIteam from "../Meals/Meal_Iteam/MealIteam";
import { Button } from "@mui/material";
import UserDetails from "../User/UserDetails";
import { clearCart } from "../../Store/Cart_Actions";

export default function Cart(props) {
  const { cartState, dispatchCartAction } = useContext(cartContext);
  const meals = Object.values(cartState.items);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showSuccessOrder, setShowSuccessOrder] = useState(false);

  const onConform = () => {
    setShowSuccessOrder(true);
    setShowUserForm(false);
  };

  const onOrder = () => {
    setShowUserForm(true);
  };

  const onClearCart = () => {
    dispatchCartAction(clearCart());
    props.onCloseCart();
  };

  return (
    <div className="cartContainer">
      {cartState.totalItems > 0 && !showUserForm && !showSuccessOrder ? (
        <div className="cartItems">
          {meals.map((curMeal, index) => {
            return <MealIteam key={index} meal={curMeal} />;
          })}
        </div>
      ) : (
        cartState.totalItems === 0 && <h1> No any Food Added</h1>
      )}

      <div>{showUserForm && <UserDetails />}</div>

      <div className="cartAction">
        {showSuccessOrder ? (
          <>
            <h3> order successfully done</h3>
            <Button onClick={onClearCart}>Okay</Button>
          </>
        ) : showUserForm ? (
          <>
            {" "}
            <Button onClick={props.onCloseCart}>Close</Button>
            <Button onClick={onConform}>Conform</Button>
          </>
        ) : (
          <>
            {" "}
            <Button onClick={props.onCloseCart}>Close</Button>
            <Button onClick={onOrder} disabled={cartState.totalItems === 0}>
              Order
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
