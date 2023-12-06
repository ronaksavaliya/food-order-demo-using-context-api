import React from "react";
import "./Meal.css";
import MealIteam from "./Meal_Iteam/MealIteam";

const dummyMeals = [
  {
    id: 1,
    name: "Pav-Bhaji",
    price: 29,
  },
  {
    id: 2,
    name: "Pani-Puri",
    price: 19,
  },
  {
    id: 3,
    name: "Dabeli",
    price: 10,
  },
  {
    id: 4,
    name: "Khaman",
    price: 15,
  },
];

export default function Meals() {
  return (
    <>
      <div className="meals_container">
        {dummyMeals.map((curMeal, index) => {
          return <MealIteam key={index} meal={curMeal} />;
        })}
      </div>
    </>
  );
}
