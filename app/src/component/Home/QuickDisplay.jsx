import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./quickSearch.css";
import carData from "./carData";
import { Link } from "react-router-dom";

function QuickDisplay(props) {
  return (
    <Carousel slide={true} variant="dark" fade>
      {carData.map((item) => {
        return (
          <Carousel.Item key={item._id}>
            <img className="image" src={item.image} alt={item.carType_name} />
            <Carousel.Caption>
              <h3 id="carName">{item.car_name}</h3>

              <button
                className="btn btn-info"
                onClick={() =>
                  window.open(
                    "https://www.toyota-myanmar.com/showroom/fortuner/specifications"
                  )
                }
              >
                Specification
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default QuickDisplay;
