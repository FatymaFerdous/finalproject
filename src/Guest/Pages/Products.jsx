import React, { useEffect, useState } from "react";
import axios from "axios";
import './guestpages.css'
import GuestFooter from '../Components/GuestFooter.jsx'
import { Link } from "react-router-dom";



export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2800/api/get-all-products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
<>
    <div className="container my-5 BgImg">
      <div className="text-center">
        <h2 className="productsHead">Products</h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
          magnam doloribus voluptatibus possimus corrupti aliquid itaque harum
          debitis ipsa!
        </p>
      </div>
      <Link className="text-decoration-none" to={`/login`}>
      <div className="row my-5">
        {products.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="daraz-card">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.ProductName}
              />
              <div className="ribbon">${product.price}</div>
              <div className="daraz-card-content">
                <h5 className="daraz-card-title text-dark">{product.ProductName}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Link>
    </div>
  <GuestFooter />
  </>
  );
}