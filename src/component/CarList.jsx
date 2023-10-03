import React from "react";
import CarCard from "./CarCard";
import carData from "./cars.json"; // Import car data from the JSON file

const CarList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {carData.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
