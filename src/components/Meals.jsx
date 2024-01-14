import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState(null);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new error("There is something wrong!");
        }
        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.error(error, message);
      }
    }
    fetchMeals();
  }, []);

  return (
    <>
      {meals && (
        <ul id="meals">
          {meals.map((meal) => (
            <MealItem meal={meal} />
          ))}
        </ul>
      )}
      {!meals && <p>Loading...</p>}
    </>
  );
};

export default Meals;
