import React, { useContext, useEffect, useState, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      setFilteredDoctors(
        doctors.filter((doc) => doc.speciality === speciality)
      );
    } else {
      setFilteredDoctors(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 ">
        {/* Filters Sidebar */}
        <div className="flex flex-col gap-4 text-sm text-gray-600 relative">
          {/* Mobile Filters Button */}
          <button
            className="sm:hidden bg-primary text-white px-6 py-3 rounded-full mb-2  z-10 right-4"
            onClick={() => setShowFilters(true)}
          >
            FILTERS
          </button>
          {/* Desktop Filters */}
          <div className="hidden sm:flex flex-col gap-4">
            <p
              onClick={() =>
                speciality === "General physician"
                  ? navigate("/doctors")
                  : navigate("/doctors/General physician")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === "General physician"
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
            >
              General physician
            </p>
            <p
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynecologist")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
              }`}
            >
              Gynecologist
            </p>
            <p
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologist")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
              }`}
            >
              Dermatologist
            </p>
            <p
              onClick={() =>
                speciality === "Pediatrician"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatrician")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === "Pediatrician" ? "bg-indigo-100 text-black" : ""
              }`}
            >
              Pediatrician
            </p>
            <p
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologist")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
              }`}
            >
              Neurologist
            </p>
            <p
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroenterologist")
              }
              className={`w-[94vw] sm:w-auto pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === "Gastroenterologist"
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
            >
              Gastroenterologist
            </p>
          </div>
          {/* Mobile Filters Drawer */}
          <MobileFilters
            show={showFilters}
            onClose={() => setShowFilters(false)}
            speciality={speciality}
            navigate={navigate}
          />
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filteredDoctors.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
            >
              <img src={item.image} alt="" className="bg-blue-50" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>{" "}
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg text-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function MobileFilters({ show, onClose, speciality, navigate }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-40 flex items-end sm:hidden">
      <div className="bg-white w-full rounded-t-2xl p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg text-primary">
            Filters Doctors{" "}
          </span>
          <button
            onClick={onClose}
            className="text-red-500 text-3xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p
            onClick={() => {
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician");
              onClose();
            }}
            className={`pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            General physician
          </p>
          <p
            onClick={() => {
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist");
              onClose();
            }}
            className={`pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() => {
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist");
              onClose();
            }}
            className={`pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() => {
              speciality === "Pediatrician"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatrician");
              onClose();
            }}
            className={`pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pediatrician" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatrician
          </p>
          <p
            onClick={() => {
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist");
              onClose();
            }}
            className={`pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() => {
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist");
              onClose();
            }}
            className={`pl-3 py-3 pr-14 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
