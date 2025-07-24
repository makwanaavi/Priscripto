import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT<span className="text-gray-700 font-medium"> US </span>{" "}
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          alt="About img"
          className="w-full md:max-w-[360px]"
        />
        <div className="flex flex-col justify-center gap-6 w-2/4 text-base text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>

          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="text-gray-400">
          WHY <span className="text-gray-700 font-medium">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[18px] hover:bg-primary hover:text-white transition-all duration-700 cursor-pointer hover:rounded-md">
          <b>Efficiency : </b>
          <p>
            Our platform streamlines the appointment scheduling process,
            reducing wait times and improving overall efficiency.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[18px] hover:bg-primary hover:text-white transition-all duration-700 cursor-pointer hover:rounded-md">
          <b>Accessibility : </b>
          <p>
            Prescripto is designed to be user-friendly, ensuring that everyone
            can easily navigate and utilize our services.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-4 text-[18px] hover:bg-primary hover:text-white transition-all duration-700 cursor-pointer hover:rounded-md">
          <b>Comprehensive Support : </b>
          <p>
            Our dedicated support team is always ready to assist you with any
            questions or concerns you may have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
