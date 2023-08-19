import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import "../styles/ProductSlider.css";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";


// CustomPrevArrow component
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
   
    <div className={className} onClick={onClick}>
   <span className="arrow left-arrow" />

    </div>
  );
};

// CustomNextArrow component
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="arrow right-arrow" />
    </div>
  );
};

export default function CategoryPage() {
  const { CategoryName } = useParams();
  const [products, setCategory] = useState([]);

  useEffect(() => {
    axios
    
      .get(`http://localhost:2800/api/get-all-categories?CategoryName=/${CategoryName}`)
      .then((json) => setCategory(json.data.category));
  }, [CategoryName]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    // <Helmet title="Categories">
    // <CommonSection title="Categories" />
    <div className="container">
     
      <div className="my-6 text-center" style={{ color: "#000157" }}>
        <h1>{CategoryName}</h1>
      </div>

      <Slider {...sliderSettings} className="product-slider">
        {products.map((val, key) => (
          <div className="product-card-container" key={key}>
            <Link
              className="text-decoration-none text-white"
              to={`/products/${val.id}`}
            >
              <Card
                className="product-card text-white custom-card"
                style={{ backgroundColor: "white" }}
              >
                <div className="ribbon-wrapper">
                  <div
                    className="card-ribbon"
                    style={{ backgroundColor: "#000157" }}
                  >
                    ₹ {val.price}
                  </div>
                </div>
                <Card.Img variant="top" src={val.CategoryImage} />
                <Card.Body
                  className="d-flex flex-column align-items-center justify-content-between h-100"
                  style={{ color: "black" }}
                >
                  <div className="text-center">
                    <Card.Title>{val.CategoryName}</Card.Title>
                    <Card.Text>{val.description}</Card.Text>
                  </div>
                  <div>
                    <button
                      className="btn btn-dark"
                      style={{ backgroundColor: "#000157" ,width:"100%"}}
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                      Add to Cart
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
    // </Helmet>
  );
}