import React, { useState } from "react";
import CarCard from "./CarCard";
import carData from "./cars.json";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 6;
const ROWS_PER_PAGE = 2;

const CarList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const paginatedCars = carData.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="flex  justify-center mt-4">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          pageCount={Math.ceil(carData.length / ITEMS_PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination flex"
          activeClassName="bg-blue-500 text-white"
          previousClassName="mr-2 px-3 py-2 border rounded-md border-gray-300"
          nextClassName="ml-2 px-3 py-2 border rounded-md border-gray-300"
          pageClassName="mx-1 px-3 py-2 border rounded-md border-gray-300"
          breakClassName="px-3 py-2 border rounded-md border-gray-300"
        />
      </div>
       
    </div>
  );
};

export default CarList;
