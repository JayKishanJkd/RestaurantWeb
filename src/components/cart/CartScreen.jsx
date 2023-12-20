// CartScreen.js
import React from 'react';

const CartScreen = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart Items</h1>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.serial_number} className="cart-item">
            <span>Name Item: {item.name}</span>
            <br />
            <span>Quantity: {item.quantity}</span>
            <br />
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default CartScreen;
