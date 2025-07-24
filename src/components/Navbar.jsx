import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        src={assets.logo}
        alt="Logo"
        className="w-44 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <ul className="hidden md:flex items-start font-normal gap-5">
        <NavLink to="/">
          <li className="py-1 ">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w--3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/doctors">
          <li className="py-1 ">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w--3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/about">
          <li className="py-1 ">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w--3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/contact">
          <li className="py-1 ">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w--3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="Profile "
              className="w-8  rounded-full"
            />
            <img src={assets.dropdown_icon} alt="Dropdown" className="w-2.5" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  {" "}
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt=""
          className="w-6 md:hidden"
        />

        {/* Mobile Menu*/}
        <div
          className={`fixed inset-0 z-30 bg-black bg-opacity-60 transition-opacity duration-300 ${
            showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } md:hidden`}
          onClick={() => setShowMenu(false)}
        >
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-2xl z-40 transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            } flex flex-col`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <img className="w-40" src={assets.logo} alt="" />
              <img
                className="w-8 cursor-pointer"
                onClick={() => setShowMenu(false)}
                src={assets.cross_icon}
                alt="Cross Icon"
              />
            </div>
            <ul className="flex flex-col items-center justify-center gap-6 mt-8 px-8 font-semibold text-xl">
              <NavLink
                onClick={() => {
                  setShowMenu(false);
                  window.scrollTo(0, 0);
                }}
                to="/"
                className="hover:text-blue-600 transition text-lg"
              >
                HOME
              </NavLink>
              <NavLink
                onClick={() => {
                  setShowMenu(false);
                  window.scrollTo(0, 0);
                }}
                to="/doctors"
                className="hover:text-blue-600 transition text-lg"
              >
                ALL DOCTORS
              </NavLink>
              <NavLink
                onClick={() => {
                  setShowMenu(false);
                  window.scrollTo(0, 0);
                }}
                to="/about"
                className="hover:text-blue-600 transition text-lg"
              >
                ABOUT
              </NavLink>
              <NavLink
                onClick={() => {
                  setShowMenu(false);
                  window.scrollTo(0, 0);
                }}
                to="/contact"
                className="hover:text-blue-600 transition text-lg"
              >
                CONTACT
              </NavLink>
            </ul>
            <div className="flex flex-col items-center mt-12 gap-6 px-8">
              <button
                onClick={() => { setShowMenu(false); navigate("/login"); }}
                className="bg-primary text-white px-10 py-4 rounded-full font-semibold w-full shadow-lg hover:bg-blue-600 transition"
              >
                Create account
              </button>
            </div>
            <div className="flex-1"></div>
            <div className="text-center text-gray-400 pb-6 text-xs">
              &copy; {new Date().getFullYear()} Priscripto. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
