import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.item.id
    );
    const updatedCart = [...state.items];
    if (existingItemIndex > -1) {
      const existingItem = updatedCart[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedCart[existingItemIndex] = updatedItem;
    } else {
      updatedCart.push({ ...action.payload.item, quantity: 1 });
    }
    return { ...state, items: updatedCart };
  }

  if (action.type === "REMOVE_ITEM") {
  }

  return state;
}

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, { items: [] });
  console.log(cart);

  const value = {
    cart: cart.items,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };

  function handleAddItemToCart(item) {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        item,
      },
    });
  }

  function handleRemoveItemFromCart(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        id: id,
      },
    });
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
