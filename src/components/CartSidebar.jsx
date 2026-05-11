import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <aside className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-header">
        <div>
          <h2>Your Cart</h2>
          <p className="cart-item-count">{cart.length} item{cart.length === 1 ? '' : 's'}</p>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close cart">
          ✕
        </button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  ✕
                </button>
              </div>
              <div className="cart-item-subtotal">
                <span>Subtotal</span>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )}
    </aside>
  );
}

export default CartSidebar;
