import React from "react";
import {FaSearch} from "react-icons/fa"
import CarCard from "./CarCard";
import carsData from "./cars.json";
import CarList from "./CarList";

function Car() {
  return (
    <div className="m-4  bg-[#edf1f6] border-solid border-2 overflow-hidden rounded-md">
      {/* navbar */}
      <div className="border-solid shadow-2xl bg-[#f1f4fa] p-2  m-3 rounded-lg ">
        <div className="flex flex-row">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-64"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <FaSearch className="h-4 w-4" />
            </button>
          </div>
          <select
            name="cars"
            className="p-2 mx-3 outline-none focus:outline-none bg-transparent"
          >
            <option value="volvo">Revelence</option>
          </select>
          <select
            name="cars"
            className="p-2 mx-3 outline-none focus:outline-none bg-transparent"
          >
            <option value="volvo">All Brands</option>
          </select>
        </div>
      </div>

      {/* cards */}
        <div>
            <CarList/>
            
        </div>
    </div>
  );
}

export default Car;
