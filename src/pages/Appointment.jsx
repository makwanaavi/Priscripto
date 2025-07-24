import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOdWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDoctor = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    let today = new Date();
    let slots = [];

    for (let i = 0; i < 7; i++) {
      let slotDate = new Date(today);
      slotDate.setDate(today.getDate() + i);

      // For today, start from next available 30-min slot after current time
      let start = new Date(slotDate);
      if (i === 0) {
        let now = new Date();
        start.setHours(now.getHours(), now.getMinutes(), 0, 0);
        // Round up to next 30-min slot
        let minutes = start.getMinutes();
        if (minutes % 30 !== 0) {
          start.setMinutes(minutes + (30 - (minutes % 30)));
        }
      } else {
        start.setHours(10, 0, 0, 0);
      }
      let end = new Date(slotDate);
      end.setHours(21, 0, 0, 0);

      while (start < end) {
        let formattedTime = start.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        slots.push({
          datetime: new Date(start),
          time: formattedTime,
          dayIndex: i,
        });

        start.setMinutes(start.getMinutes() + 30);
      }
    }
    setDocSlots(slots);
  };
  useEffect(() => {
    fetchDoctor();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
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

        {/*---- Booking SLots ------------ */}
        <div className="sm:ml-72 sm:pl-4 mt-12 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-auto mt-4">
            {[...Array(7)].map((_, index) => {
              // Find first slot for each day to display date
              const slotForDay = docSlots.find(
                (slot) => slot.dayIndex === index
              );
              return slotForDay ? (
                <div
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    index === slotIndex
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  key={index}
                  onClick={() => setSlotIndex(index)}
                >
                  <p>{daysOdWeek[slotForDay.datetime.getDay()]}</p>
                  <p>{slotForDay.datetime.getDate()}</p>
                </div>
              ) : null;
            })}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-auto mt-4">
            {/* Show all slots for selected day */}
            {docSlots.length > 0 &&
              docSlots
                .filter((slot) => slot.dayIndex === slotIndex)
                .map((item, idx) => (
                  <p
                    onClick={() => setSlotTime(item.time)}
                    className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border ${
                      item.time === slotTime
                        ? "bg-primary text-white font-medium"
                        : "text-gray-400 border border-gray-400 font-medium"
                    }`}
                    key={idx}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))}
          </div>

          <button className="bg-primary text-white font-light text-sm py-3 px-14 rounded-full mt-6">Book an appointment</button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo?.speciality} />
      </div>
    )
  );
};

export default Appointment;
