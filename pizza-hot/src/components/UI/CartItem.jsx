export default function CartItem({ item }) {
  return (
    <li className="cart-item border-bottom p-2">
      <p>
        {item.title} - {item.quantity * item.price}
      </p>
      <div className="actions">
        <button className="btn btn-sm btn-outline-primary">-</button>
        <span>{item.quantity}</span>
        <button className="btn btn-sm btn-outline-primary">+</button>
      </div>
    </li>
  );
}
