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
        <Modal className="cart">
          <h2>Your cart</h2>
          <ul>
            <li className="cart-item">Meal 1</li>
            <li className="cart-item">Meal 2</li>
            <li className="cart-item">Meal 3</li>
          </ul>
        </Modal>
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
