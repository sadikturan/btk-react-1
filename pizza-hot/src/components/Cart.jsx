import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { UIContext } from "../contexts/UIContext";

export default function Cart() {
  const { items, addItem, deleteItem } = useContext(CartContext);

  const { uiProgress, hideCart } = useContext(UIContext);

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal open={uiProgress === "cart"}>
      <h2>Sepetiniz</h2>
      <ul className="cart-items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => addItem(item)}
            onDecrease={() => deleteItem(item.id)}
          />
        ))}
      </ul>
      <div className="cart-summary">
        <div className="modal-actions text-end">
          <button
            onClick={() => hideCart()}
            className="btn btn-sm btn-danger me-2"
          >
            Kapat
          </button>
          <button className="btn btn-sm btn-outline-success">
            Sipariş Ver
          </button>
        </div>
        <p className="badge text-bg-success mb-0 fs-5">{cartTotal} ₺</p>
      </div>
    </Modal>
  );
}
