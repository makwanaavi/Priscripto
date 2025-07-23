import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left-side */}
        <div>
          <img src={assets.logo} alt="Priscripto Logo" className="mb-5 w-40"/>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Priscripto helps you streamline your prescription management with
            secure, fast, and user-friendly digital solutions. Empowering
            healthcare professionals and patients for a better, paperless
            experience.
          </p>
        </div>

        {/* Center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right-side */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>info@priscripto.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="my-5" />
        <p className="text-center my-5 mb-5 font-normal text-gray-600">© 2025 Priscripto. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;


