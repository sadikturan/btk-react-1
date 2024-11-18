import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { UIContext } from "../contexts/UIContext";

export default function Cart() {
  const { items, addItem, deleteItem } = useContext(CartContext);

  const { uiProgress, hideCart, showCheckout } = useContext(UIContext);

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal open={uiProgress === "cart"}>
      <h2>Sepetiniz</h2>
      {items.length === 0 ? (
        <div className="alert alert-danger">Sepetinizde ürün yok.</div>
      ) : (
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
      )}

      <div className="cart-summary">
        <div className="modal-actions text-end">
          <button
            onClick={() => hideCart()}
            className="btn btn-sm btn-danger me-2"
          >
            Kapat
          </button>
          {items.length > 0 && (
            <button
              onClick={() => showCheckout()}
              className="btn btn-sm btn-outline-success"
            >
              Sipariş Ver
            </button>
          )}
        </div>
        {items.length > 0 && (
          <p className="badge text-bg-success mb-0 fs-5">{cartTotal} ₺</p>
        )}
      </div>
    </Modal>
  );
}
