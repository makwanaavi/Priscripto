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
    <div>
      <img src={userData.image} alt="" />

      {isEdit ? (
        <input
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />

      <div>
        <p>CONTACT INFORMATION</p>

        <div>
          <p>EmailId : </p>
          <p>{userData.email}</p>

          <p>Phone :</p>
          {isEdit ? (
            <input
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p>Address :</p>
          <p>
            {isEdit ? (
              <p>
                <input
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
          <p>BASIC INFORMATION</p>

          <div>
            <p>Gender : </p>
            {isEdit ? (
              <select
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
           {
            isEdit ? (
              <input
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

        <div>
         {
          isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-primary text-white rounded-md p-2 mt-4"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-primary text-white rounded-md p-2 mt-4"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
