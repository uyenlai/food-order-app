import React from "react";

const MealItem = ({ meal }) => {
  return (
    <li key={meal.id} className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
          <button className="button meal-item-actions">Add to cart</button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
