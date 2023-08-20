import React, { useContext } from "react";
import { CartContext } from "../CartContext/context";
import { GlobalContext } from "../../Context/context";
import { decodeToken } from "react-jwt";
import CommonSection from "./CommonSection.jsx";
import Helmet from "../Components/Helmet";

export default function Cart() {
  const { cart_state, cart_dispatch } = useContext(CartContext);
  const { state, dispatch } = useContext(GlobalContext);
  const user = decodeToken(state.token);

  const total = cart_state.cart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  const handleDeleteItem = (itemId) => {
    cart_dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const checkout = () => {
    const payload = {
      items: cart_state.cart,
      totalBill: total,
      customerAddress: "hello 123 Street ABC",
      customerContact: "0900 78601",
      customerName: user.username || "Unknown Username",
      customerEmail: user.email || "unknown@example.com",
    };

    console.log(payload);
  };

  return (
    <Helmet title="Cart">
      <CommonSection title="Cart" />
      <div className="container">
        <div className="text-center my-5">
          <h2>Shopping Cart</h2>
          <small className="text-muted">
            Review and manage your cart items
          </small>
        </div>

        <div className="p-4 rounded bg-light">
        {cart_state.cart.map((item, index) => (
            <div className="card mb-3" key={index}>
              <div className="row g-0">
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <img
                    src={item.thumbnail}
                    style={{ height: "10vh", objectFit: "contain" }}
                    className="img-fluid rounded-start"
                    alt={item.ProductName}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.ProductName} - {item.price} {item.priceUnit}
                    </h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Quantity: {item.quantity}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <h5 className="card-title text-center">
                  {item.quantity * (item.price || 0).toFixed(2)}
                  </h5>
                  <button
                    className="btn btn-link text-danger"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="border-top border-primary pt-3">
            <div className="d-flex justify-content-between">
              <h6>Total</h6>
              <h6>${total.toFixed(2)}</h6>
            </div>
          </div>

          <div className="mt-4">
            <button
              className="btn btn-primary btn-block"
              onClick={checkout}
              disabled={cart_state.cart.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </Helmet>
  );
}