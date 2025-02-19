import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "./cartSlice";

export const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                <h3>{item.title}</h3> {/* Display product title */}
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: "10px", color: "red" }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total Price: <strong>₹{totalPrice.toFixed()}</strong></h3>
        </>
      )}
    </div>
  );
};

export default CartPage;

