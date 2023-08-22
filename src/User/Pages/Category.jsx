import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './pages.css'
import BrandDetails from "../Components/BrandDetails";
import AUTO from "../../assets/images/AUTO.png";


const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (

    <div className={className} onClick={onClick}>
      <span className="arrow left-arrow" />

    </div>
  );
};


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
    <>
    <div  className="d-flex flex-column align-items-center justify-content-between">
      <img src={AUTO} alt="" />
    </div>


      <div className="container">
        <div className="text-center">
          <h2 className="productsHead muu">Categories</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
            magnam doloribus voluptatibus possimus corrupti aliquid itaque harum
            debitis ipsa!
            <br />
            <br />
            <br />

          </p>
        </div>
      </div>
      <div className="container">
        <div className=" text-center">
          <h1>{CategoryName}</h1>
        </div>

        <Slider {...sliderSettings} className="product-slider">
          {products.map((val, key) => (
            <div className="product-card-container" key={key}>

              <Card
                className="product-card text-white custom-card"
               >

                <Card.Img variant="top" src={val.CategoryImage} />
                <Card.Body
                  className="d-flex flex-column align-items-center justify-content-between"
                  style={{ color: "black" }}>
                  <div className="text-center">
                    <Card.Title>{val.CategoryName}</Card.Title>
                  </div>
                </Card.Body>
              </Card>

            </div>
          ))}
        </Slider>
      </div>

<BrandDetails />
    </>
  );
}