import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b text-lg">
        My Appointments
      </p>

      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 md:flex sm:gap-6 py-2 border-b"
            key={index}
          >
            <div>
              <img src={item.image} alt="" className="w-32 bg-indigo-50" />
            </div>
            <div className="flex-1 text-sm text-zinc-700 ">
              <p className="text-lg text-neutral-800 font-semibold">
                {item.name}
              </p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1 text-base ">
                Address :
              </p>
              <p className="text-sm">{item.address.line1}</p>
              <p className="text-sm mb-1">{item.address.line2}</p>
              <p className="mt-2">
                <span className="font-medium  mt-2 text-base">
                  Date & Time :{" "}
                </span>{" "}
                25, July, 2024 | 8:30 PM
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-1 justify-end">
              <button className=" text-black py-3 text-center sm:min-w-48 border rounded hover:bg-primary hover:text-white transition-all duration-500">
                Pay Here
              </button>
              <button className="text-red-500 text-center sm:min-w-48 py-3 border rounded hover:bg-red-500 hover:text-white transition-all duration-500">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyAppointments;
