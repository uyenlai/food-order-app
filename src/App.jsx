import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import CartProvider from "./store/CartContext";
import ModalProvider from "./store/ModalContext";

function App() {
  return (
    <ModalProvider>
      <CartProvider>
        <Header />
        <Meals />
        <Cart />
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
