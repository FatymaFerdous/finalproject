import React, { useContext } from "react";
import { CartContext } from "../CartContext/context";
import { GlobalContext } from "../../Context/context";
import { decodeToken } from "react-jwt";
import { Link } from "react-router-dom";
import "./cart.css"; // Import the cart.css file


export default function Cart() {
  const { cart_state, cart_dispatch } = useContext(CartContext);
  const { state, dispatch } = useContext(GlobalContext);
  const user = decodeToken(state.token);

  const calculateTotal = () => {
    return cart_state.cart.reduce(
      (accumulator, product) => accumulator + product.price * product.quantity,
      0
    );
  };

  const checkout = () => {
    const total = calculateTotal();
    const payload = {
      items: cart_state.cart,
      totalBill: total,
      customerAddress: "hello 123 Street ABC",
      customerContact: "0900 78601",
      customerName: user.username,
      customerEmail: user.email,
    };

    console.log("Checkout Payload:", payload);
  };

  const total = calculateTotal();

  const deleteItem = (itemId) => {
    cart_dispatch({ type: "DELETE_ITEM", payload: itemId });
  };

  const clearCart = () => {
    cart_dispatch({ type: "CLEAR_CART" });
  };

  return (
    <>
     
      <div className="container">
        <div className="cart-container">
          {cart_state.cart.map((val, key) => (
            <div
              className="cart-item"
              key={key}
              onDoubleClick={() => deleteItem(val._id)}
            >
              <div className="cart-item-image">
                <img src={val.thumbnail} alt="" className="w-50 h-40"/>
              </div>
              <div className="cart-item-details">
                <h5>
                  {val.ProductName} 
                  <div className="cart-item-price" style={{ color: "green" }}>
                <h5>${val.quantity * val.price}</h5>
              </div>
                </h5>
                <p>{val.description}</p>
                <p className="quantity" style={{ color: "green" }}>
                  Quantity: {val.quantity}
                </p>
              </div>
            </div>
          ))}
           <br />
            <br />
          <div className="cart-summary">
            <div className="total" >
              <h6>Total</h6>
              <div>{total}</div>
            </div>
            <div className="cart-buttons">
              <button className="btn btn-clear btn-success" onClick={clearCart} >
                Clear Cart
              </button>

              <button
                // disabled={cart_state.cart.length === 0}
                className="btn btn-success w-100 mb-3 my-3"
              >
                <Link
                  to={"/products/checkout"}
                  className="text-decoration-none text-white">
                  Checkout!
                </Link>
              </button>
            
            </div>
          </div>
        </div>
      </div>
</>
  );
}