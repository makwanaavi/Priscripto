import React from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = React.useState({
    name: "Avi Makwana",
    image: assets.profile_pic,
    email: "makwanaavi73@gmail.com",
    phone: "+91 9104100955",
    address: {
      line1: "54709 Willms Station",
      line2: "Suite 350, Washington, USA",
    },
    gender: "Male",
    dob: "2005-12-18",
  });

  const [isEdit, setIsEdit] = React.useState(true);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img src={userData.image} alt="" className="w-36 rounded-lg" />

      {isEdit ? (
        <input
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
          className="bg-gray-200 text-3xl font-medium max-w-60 mt-4 p-2 rounded-sm"
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px border-none]" />

      <div>
        <p className="text-neutral-500 underline mt-4 text-lg">
          CONTACT INFORMATION
        </p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 text-base">
          <p className="font-medium">EmailId : </p>
          <p className="text-primary">{userData.email}</p>

          <p className="font-medium">Phone :</p>
          {isEdit ? (
            <input
              className="bg-gray-200 p-1 rounded-sm"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
            />
          ) : (
            <p className="text-primary">{userData.phone}</p>
          )}

          <p className="font-medium">Address :</p>
          <p>
            {isEdit ? (
              <p>
                <input
                  className="bg-gray-200 p-1 rounded-sm"
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address.line1}
                />
                <br />
                <input
                  className="bg-gray-200 p-1 rounded-sm"
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                />
              </p>
            ) : (
              <>
                <p>{userData.address.line1}</p>
                <p>{userData.address.line2}</p>
              </>
            )}
          </p>
        </div>

        <div>
          <p className="text-neutral-500 underline mt-4 text-lg">
            BASIC INFORMATION
          </p>

          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 text-base">
            <p className="font-medium">Gender : </p>
            {isEdit ? (
              <select
                className="max-w-28 "
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}

            <p>Date of Birth : </p>
            {isEdit ? (
              <input
                className="max-w-28 bg-gray-200 p-1 rounded-sm"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>

        <div className="mt-10">
          {isEdit ? (
           <div className="flex gap-4">
             <button
              onClick={() => setIsEdit(false)}
              className="border px-7 py-3 rounded-full hover:bg-primary/60 cursor-no-drop hover:text-white transition-colors duration-300"
            >
              Edit Profile
            </button>

             <button
              onClick={() => setIsEdit(false)}
              className="border border-primary px-7 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Save Information
            </button>
           </div>
          ) : (
            <div className="flex gap-4">
            <button
              onClick={() => setIsEdit(true)}
              className="border border-primary px-7 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Edit Profile
            </button>

              <button
              onClick={() => setIsEdit(false)}
              className="border px-7 py-3 rounded-full hover:bg-primary/60 cursor-no-drop hover:text-white transition-colors duration-300"
            >
              Save Information
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
