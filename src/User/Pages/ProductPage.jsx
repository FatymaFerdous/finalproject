import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ImageSection from "../components/ImageSection";
import { CartContext } from "../CartContext/context";
import "./product.css";

function ProductPage() {
  const { productName } = useParams();

  const [products, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [review, setReview] = useState("");
  const [ratingStar, setRatingStar] = useState(0);

  const { cart_state, cart_dispatch } = useContext(CartContext);

  useEffect(() => {
    if (!productName) {
      return;
    }

    axios
      .get(`http://localhost:2800/api/get-product-by-name?ProductName=${productName}`)
      .then(response => setProduct(response.data.products))
      .catch((error) => console.log(error.message));
  }, []);

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const addtoCart = () => {
    if (!products) {
      console.error("Product data is not available.");
      return;
    }

    const payload = {
      ...products,
      quantity: productQuantity,
      totalPrice: products.price * productQuantity,
    };

    cart_dispatch({
      type: "ADD_TO_CART",
      payload,
    });

    Swal.fire({
      title: "Added to Cart!",
      text: "Check your Cart for Check Out",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });
  };

  const submitReview = () => {
    const payload = {
      productName: productName,
      review: review,
      rating: ratingStar,
    };

    localStorage.setItem("productReview", JSON.stringify(payload));

    Swal.fire({
      title: "Review Submitted!",
      text: "Thank you for your review.",
      icon: "success",
      confirmButtonText: "Continue",
    });
  };

  return (
    <>

      <div className="container">
        <div className="text-center">
          <h2 className="productoff">Product Detail</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
            magnam doloribus voluptatibus possimus corrupti aliquid itaque harum
            debitis ipsa!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {products?.imageArray?.length > 0 && (
              <div className="image-section-container">
                <ImageSection images={products.imageArray} />
              </div>
            )}
          </div>
          <div className="col-md-9">
            {products && (
              <div className="product-details">
                <h1 className="product-title" style={{ color: "rgb(1, 0, 75)" }}>
                  {products.ProductName}
                </h1>
                <h3 className="product-price" style={{ color: "rgb(5, 128, 5)" }}>
                  Price: ${products.price}
                </h3>
                <p className="product-description" style={{ color: "rgb(1, 0, 75)" }}>
                  {products.description}
                </p>
                <div className="product-rating">
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={products.rating}
                    color2={"#ffd700"}
                  />
                </div>
                <div className="product-quantity">
                  <button
                    className="quantity-button"
                    disabled={productQuantity > 1 ? false : true}
                    onClick={() => setProductQuantity(productQuantity - 1)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="quantity-value">{productQuantity}</span>
                  <button
                    className="quantity-button"
                    onClick={() => setProductQuantity(productQuantity + 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <button
                  className="add-to-cart-button"
                  disabled={cart_state.cart.some(item => item._id === products._id)}
                  onClick={addtoCart}
                >
                  <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                  Add to Cart
                </button>
              </div>
            )}
            <div className="customer-reviews">
              <div className="customer-reviews">
                <h3 className="review-heading" style={{ color: "rgb(1, 0, 75)" }}>
                  Customer Reviews
                </h3>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <div className="rating-input">
                  <h4>Rate Us:</h4>
                  <div className="d-flex align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={ratingStar}
                      onChange={ratingChanged}
                      color2={"#ffd700"}
                    />
                    <span className="selected-rating">{ratingStar}</span>
                  </div>
                </div>
                <div className="submit-button">
                  <button
                    className="btn text-white"
                    style={{ background: "rgb(5, 128, 5)" }}
                    onClick={submitReview}
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
