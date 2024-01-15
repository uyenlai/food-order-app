import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

const MealItem = ({ meal }) => {
  const cart = useContext(CartContext);

  function handleAddItem(item) {
    cart.addItem(item);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name}`} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
          <button
            onClick={() =>
              handleAddItem({
                id: meal.id,
                name: meal.name,
                price: meal.price,
                description: meal.price,
                image: meal.image
              })
            }
            className="button meal-item-actions"
          >
            Add to cart
          </button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
