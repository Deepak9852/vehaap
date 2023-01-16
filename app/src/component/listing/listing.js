import React, { useEffect, useState } from "react";
import axios from "axios";
import "./listing.css";
// import ListingDisplay from "./listingDisplay";
// import CuisineFilter from "../filters/cuisineFilter";
// import CostFilter from '../filters/costFilter';
import Header from "../header";

//const lurl = "https://zomatoapi.onrender.com/restaurant?mealtype_id="
// const listurl = "http://localhost:9800/vehicalname";

const Listing = () => {
  const [carData, setCarData] = useState([]);
  const getCarList = async () => {
    const url = "http://localhost:9800/vehicalname";
    const response = await axios.get(url);
    try {
      const responseJson = await response.json();
      const data = responseJson.results;
      setCarData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCarList();
  }, []);

  return (
    <>
      <Header />
      {carData.map((car) => {
        <div>
          <h3>{car.name}</h3>
          <p>{car.description}</p>
          <p>Rs. {car.cost}</p>
          <p>{car.uses}</p>
        </div>;
      })}
    </>
  );
};

export default Listing;
