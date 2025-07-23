import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDoctor = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]); 

    //getting current data 
    let today = new Date(); 

    for (let i = 0; i < 7 ; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        setDocSlots((prev) => [...prev, currentDate]);
    }
  } 

  useEffect(() => {
    fetchDoctor();
  }, [doctors, docId]);

  useEffect(() =>{
    getAvailableSlots();
  }, [docInfo])
  return (
    docInfo && (
      <div>
        {/* --------- Doctor Details ---------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              src={docInfo?.image}
              alt=""
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px ] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo?.name}{" "}
              <img src={assets.verified_icon} alt="" className="w-5" />
            </p>
            <div className="flex items-center gap-2 text-base mt-1 text-gray-600">
              <p>
                {docInfo?.degree} - {docInfo?.speciality}
              </p>

              <button className="py-1.5 px-2.5 border text-xs rounded-full">
                {docInfo?.experience}
              </button>
            </div>

            <div>
              <p className="flex items-center gap-2 text-base font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-base text-gray-500 max-w-[700px] mt-1">
                {docInfo?.about}
              </p>
            </div>

            <div>
              <p className="text-gray-600 font-medium mt-4 text-lg">
                Appointment fee :{" "}
                <span className="text-gray-900">
                  {currencySymbol}
                  {docInfo?.fees}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
