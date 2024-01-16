import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartProvider from "./store/CartContext";
import ModalProvider from "./store/ModalContext";

function App() {
  return (
    <ModalProvider>
      <CartProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
