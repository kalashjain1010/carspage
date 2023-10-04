import React from "react";

import { BsPeople } from "react-icons/bs";
import { LuFuel } from "react-icons/lu";
import { BsSpeedometer2 } from "react-icons/bs";
import { PiSteeringWheelThin } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

const CarCard = ({ car }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="bg-[#f1f5fb] w-80 m-10 border-solid border-2 rounded-xl ">
          <div className="flex flex-col p-2">
            <div>
              <img
                className="rounded-2xl bg-cover"
                src={car.image}
                alt="Car"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between p-2 ">
                <div className="text-lg">{car.name}</div>
                <div className="border-dashed border-2 border-blue-400 rounded-xl px-2 p-1">
                  {car.year}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-col m-2">
              <div className="flex flex-row">
                <div className="flex items-center">
                  <div className="flex items-center mr-1">
                    <BsPeople className="text-blue-700" size={20} />
                  </div>
                  <div className="text-center">{car.seater} people </div>
                </div>
                <div className="px-10">
                  <div className="flex items-center">
                    <div className="flex items-center mr-1">
                      <LuFuel className="text-blue-700" size={20} />
                    </div>
                    <div className="text-center">{car.gasType}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex items-center">
                  <div className="flex items-center mr-1">
                    <BsSpeedometer2 className="text-blue-700" size={20} />
                  </div>
                  <div className="text-center">{car.mileage}</div>
                </div>
                <div className="px-10">
                  <div className="flex items-center ml-3">
                    <div className="flex items-center mr-1">
                      <PiSteeringWheelThin
                        className="text-blue-700 font-bold"
                        size={20}
                      />
                    </div>
                    <div className="text-center">{car.mode}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="divide-solid h-[1px] bg-gray-200 w-full"></div>

            {/* last part */}
            <div className="flex flex-row justify-between p-3 ">
              <div className="text-lg pt-2">{car.price}/month</div>
              <div className="flex flex-row items-center p-2">
                <AiOutlineHeart
                  className="text-blue-700 font-bold mr-4 bg-blue-200 rounded-md p-[2px] hover:cursor-pointer hover:bg-white "
                  size={23}
                />
                <div className="text-center border-solid border-2 bg-[#4899ed] rounded-lg p-1 text-white cursor-pointer ">
                  Rent Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
