import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function reducer(state, action) {
  console.log(state);

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
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const updatedCart = [...state.items];
    const existingItem = updatedCart[existingItemIndex];
    if (existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedCart[existingItemIndex] = updatedItem;
    } else {
      updatedCart.splice(existingItemIndex, 1);
    }
    return { ...state, items: updatedCart };
  }

  if (action.type === "CLEAR") {
    console.log(state);
    return { ...state, items: [] };
  }

  return state;
}

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, { items: [] });

  const value = {
    cart: cart.items,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
    clearCart,
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

  function clearCart() {
    dispatch({
      type: "CLEAR",
    });
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
